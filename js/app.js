/**
 * Tuyen Truyen Phap Luat - Main Application
 * Core functionality for the legal information portal
 */

// ========== SECURITY UTILITIES ==========

/**
 * Sanitize user input to prevent XSS attacks
 * @param {string} str - User input string
 * @returns {string} - Sanitized string
 */
function sanitizeHTML(str) {
    const escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };
    return String(str).replace(/[&<>"'`=\/]/g, s => escapeMap[s]);
}

// ========== MOBILE MENU ==========

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    if (!mobileMenu || !mobileMenuBtn) return;

    const isHidden = mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
}

// ========== MODAL FUNCTIONALITY ==========

function openModal(id) {
    const data = window.docData ? window.docData[id] : null;
    if (!data) return;

    let title = data.title;
    let content = data.content;

    // Multi-language support
    if (data.vi && data.en) {
        const lang = window.currentLang || 'vi';
        title = data[lang]?.title || data.vi.title;
        content = data[lang]?.content || data.vi.content;
    }

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalPdfLink = document.getElementById('modalPdfLink');

    if (modalTitle) modalTitle.innerText = title;
    if (modalBody) modalBody.innerHTML = content;
    if (modalPdfLink) modalPdfLink.href = data.pdfLink;

    // Re-render icons in the new content
    if (window.lucide) lucide.createIcons();

    const modal = document.getElementById('docModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('docModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// ========== WELCOME MODAL ==========

function showWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (!modal) return;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) lucide.createIcons();
    if (typeof updateWelcomeModalLang === 'function') {
        updateWelcomeModalLang(window.currentLang || 'vi');
    }
}

function closeWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (!modal) return;

    modal.classList.add('hidden');
    document.body.style.overflow = '';

    // Save preference if checkbox is checked
    const checkbox = document.getElementById('dontShowAgain');
    if (checkbox && checkbox.checked) {
        localStorage.setItem('hideWelcomeModal', 'true');
    }
}

// ========== CHAT FUNCTIONALITY ==========

const NOTEBOOK_LM_URL = 'https://notebooklm.google.com/notebook/03f2338f-f7f7-4adf-aba3-52b93672b484';

function handleChatSend() {
    const input = document.getElementById('fakeChatInput');
    if (!input) return;

    const query = input.value.trim();
    if (!query) return;

    const history = document.getElementById('chatHistory');
    if (!history) return;

    // SECURITY: Sanitize user input before inserting into DOM
    const safeQuery = sanitizeHTML(query);

    const userMsg = `
        <div class="flex justify-end animate-fade-in-up">
            <div class="bg-cand-red text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-md max-w-[90%] text-sm">
                ${safeQuery}
            </div>
        </div>
    `;
    history.insertAdjacentHTML('beforeend', userMsg);
    input.value = '';
    history.scrollTop = history.scrollHeight;

    // Show loading bubble
    const loadingMsg = `
        <div class="flex justify-start animate-fade-in-up" id="loadingBubble">
            <div class="bg-white text-gray-500 border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                <span class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
                    <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
                </span>
            </div>
        </div>
    `;
    history.insertAdjacentHTML('beforeend', loadingMsg);
    history.scrollTop = history.scrollHeight;

    // Redirect after delay
    setTimeout(() => {
        window.open(NOTEBOOK_LM_URL, '_blank', 'noopener,noreferrer');

        const loadingBubble = document.getElementById('loadingBubble');
        if (loadingBubble) loadingBubble.remove();

        const lang = window.currentLang || 'vi';
        const messages = {
            vi: { title: 'Đã mở kết nối!', desc: 'Tôi đã chuyển câu hỏi của bạn sang hệ thống NotebookLM để xử lý chi tiết hơn. Vui lòng kiểm tra tab mới.' },
            en: { title: 'Connection opened!', desc: 'I have redirected your question to NotebookLM for detailed processing. Please check the new tab.' },
            zh: { title: '连接已打开！', desc: '我已将您的问题转至NotebookLM进行详细处理。请检查新标签页。' }
        };
        const msg = messages[lang] || messages.vi;

        const systemMsg = `
            <div class="flex justify-start animate-fade-in-up">
                <div class="bg-blue-50 text-blue-800 border border-blue-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%] text-sm">
                    <p class="font-bold flex items-center gap-2 mb-1">
                        <i data-lucide="external-link" class="w-4 h-4"></i>
                        ${sanitizeHTML(msg.title)}
                    </p>
                    <p>${sanitizeHTML(msg.desc)}</p>
                </div>
            </div>
        `;
        history.insertAdjacentHTML('beforeend', systemMsg);
        history.scrollTop = history.scrollHeight;

        if (window.lucide) lucide.createIcons();
    }, 1000);
}

function handleChatEnter(e) {
    if (e.key === 'Enter') handleChatSend();
}

function fillChat(text) {
    const input = document.getElementById('fakeChatInput');
    if (input) {
        input.value = text;
        handleChatSend();
    }
}

// ========== VISITOR STATISTICS ==========

async function updateVisitorStats() {
    const NAMESPACE = 'tuyen-truyen-phap-luat-v1';
    const TOTAL_KEY = 'total-visits';
    const INITIAL_OFFSET = 2986;

    const now = new Date();
    const dateKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const TODAY_KEY = `visits-${dateKey}`;

    const fmt = (n) => n.toLocaleString();

    const LS_TOTAL_KEY = 'visitor_total_count';
    const LS_TODAY_KEY = 'visitor_today_count';
    const LS_DATE_KEY = 'visitor_last_date';
    const LS_VISITED_KEY = 'visitor_session_counted';

    let storedTotal = parseInt(localStorage.getItem(LS_TOTAL_KEY) || '0');
    let storedToday = parseInt(localStorage.getItem(LS_TODAY_KEY) || '0');
    const storedDate = localStorage.getItem(LS_DATE_KEY);

    if (storedDate !== dateKey) {
        storedToday = 0;
        localStorage.setItem(LS_DATE_KEY, dateKey);
    }

    const sessionCounted = sessionStorage.getItem(LS_VISITED_KEY);

    if (!sessionCounted) {
        storedTotal++;
        storedToday++;
        localStorage.setItem(LS_TOTAL_KEY, storedTotal.toString());
        localStorage.setItem(LS_TODAY_KEY, storedToday.toString());
        sessionStorage.setItem(LS_VISITED_KEY, 'true');
    }

    try {
        const totalUrl = sessionCounted
            ? `https://api.counterapi.dev/v1/${NAMESPACE}/${TOTAL_KEY}`
            : `https://api.counterapi.dev/v1/${NAMESPACE}/${TOTAL_KEY}/up`;

        const totalRes = await fetch(totalUrl, { method: 'GET', mode: 'cors' });
        if (!totalRes.ok) throw new Error(`HTTP ${totalRes.status}`);

        const totalData = await totalRes.json();
        const totalCount = (totalData.count || 0) + INITIAL_OFFSET;

        const statTotal = document.getElementById('stat-total');
        if (statTotal) statTotal.innerText = fmt(totalCount);
        localStorage.setItem(LS_TOTAL_KEY, (totalData.count || 0).toString());

        const todayUrl = sessionCounted
            ? `https://api.counterapi.dev/v1/${NAMESPACE}/${TODAY_KEY}`
            : `https://api.counterapi.dev/v1/${NAMESPACE}/${TODAY_KEY}/up`;

        const todayRes = await fetch(todayUrl, { method: 'GET', mode: 'cors' });
        if (!todayRes.ok) throw new Error(`HTTP ${todayRes.status}`);

        const todayData = await todayRes.json();
        const statToday = document.getElementById('stat-today');
        if (statToday) statToday.innerText = fmt(todayData.count || 0);
        localStorage.setItem(LS_TODAY_KEY, (todayData.count || 0).toString());

    } catch (error) {
        console.error('API error, using local fallback:', error);
        const statTotal = document.getElementById('stat-total');
        const statToday = document.getElementById('stat-today');
        if (statTotal) statTotal.innerText = fmt(storedTotal + INITIAL_OFFSET);
        if (statToday) statToday.innerText = fmt(storedToday);
    }
}

// ========== AI BUBBLE SCROLL BEHAVIOR ==========

function initAIBubble() {
    const bubble = document.getElementById('aiBubble');
    if (!bubble) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            bubble.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
        } else {
            bubble.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
        }
    }, { passive: true });
}

// ========== KEYBOARD NAVIGATION ==========

function initKeyboardNavigation() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
            closeWelcomeModal();
        }
    });
}

// ========== SERVICE WORKER ==========

function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    }
}

// ========== INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide) lucide.createIcons();

    // Initialize mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Initialize AI bubble
    initAIBubble();

    // Initialize keyboard navigation
    initKeyboardNavigation();

    // Initialize service worker
    initServiceWorker();

    // Show welcome modal if not opted out
    if (localStorage.getItem('hideWelcomeModal') !== 'true') {
        setTimeout(showWelcomeModal, 500);
    }

    // Update visitor stats
    updateVisitorStats();
});
