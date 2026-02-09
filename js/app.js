/**
 * Tuyen Truyen Phap Luat - Main Application
 * Core functionality for the legal information portal
 */

// ========== GLOBAL VARIABLES ==========
let lastFocusedElement = null;

// ========== SECURITY UTILITIES ==========
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

    if (mobileMenu && mobileMenuBtn) {
        const isHidden = mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
    }
}

// ========== MODAL FUNCTIONALITY ==========
function openModal(id) {
    lastFocusedElement = document.activeElement; // Save trigger element

    const data = window.docData ? window.docData[id] : null;
    if (!data) return;

    let title = data.title;
    let content = data.content;

    // Multi-language support
    if (data.vi && data.en) {
        // window.currentLang is set by js/i18n.js
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
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Accessibility: Focus management
    // Focus the Close (X) button by default
    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) {
        setTimeout(() => closeBtn.focus(), 50);
    }
}

function closeModal() {
    const modal = document.getElementById('docModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // Restore focus
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

// ========== CHAT FUNCTIONALITY ==========
function handleChatSend() {
    const input = document.getElementById('fakeChatInput');
    if (!input) return;

    const query = input.value.trim();
    if (!query) return;

    // SECURITY: Sanitize user input before inserting into DOM
    const safeQuery = sanitizeHTML(query);

    const history = document.getElementById('chatHistory');
    if (!history) return;

    // Add user message to UI
    const userMsg = `
        <div class="flex justify-end animate-fade-in-up">
            <div class="bg-cand-red text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-md max-w-[90%] text-sm">
                ${safeQuery}
            </div>
        </div>
    `;
    history.insertAdjacentHTML('beforeend', userMsg);
    input.value = '';

    // Scroll to bottom
    history.scrollTop = history.scrollHeight;

    // Simulate thinking
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

    // Redirect after 1s
    setTimeout(() => {
        // Open NotebookLM with security attributes
        window.open('https://notebooklm.google.com/notebook/03f2338f-f7f7-4adf-aba3-52b93672b484', '_blank', 'noopener,noreferrer');

        // Update UI to show system message
        const loadingBubble = document.getElementById('loadingBubble');
        if (loadingBubble) loadingBubble.remove();

        const systemMsg = `
             <div class="flex justify-start animate-fade-in-up">
                  <div class="bg-blue-50 text-blue-800 border border-blue-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%] text-sm">
                      <p class="font-bold flex items-center gap-2 mb-1">
                        <i data-lucide="external-link" class="w-4 h-4"></i>
                        Đã mở kết nối!
                      </p>
                      <p>Tôi đã chuyển câu hỏi của bạn sang hệ thống NotebookLM để xử lý chi tiết hơn. Vui lòng kiểm tra tab mới.</p>
                  </div>
             </div>
        `;
        history.insertAdjacentHTML('beforeend', systemMsg);
        history.scrollTop = history.scrollHeight;
        if (window.lucide) lucide.createIcons(); // Re-render icons
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

    // Generate Today Key: YYYY-MM-DD
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateKey = `${year}-${month}-${day}`;
    const TODAY_KEY = `visits-${dateKey}`;

    // Helper to format with commas
    const fmt = (n) => n.toLocaleString();

    // LocalStorage keys for fallback
    const LS_TOTAL_KEY = 'visitor_total_count';
    const LS_TODAY_KEY = 'visitor_today_count';
    const LS_DATE_KEY = 'visitor_last_date';
    const LS_VISITED_KEY = 'visitor_session_counted';

    // Get stored values
    let storedTotal = parseInt(localStorage.getItem(LS_TOTAL_KEY) || '0');
    let storedToday = parseInt(localStorage.getItem(LS_TODAY_KEY) || '0');
    const storedDate = localStorage.getItem(LS_DATE_KEY);

    // Reset today count if it's a new day
    if (storedDate !== dateKey) {
        storedToday = 0;
        localStorage.setItem(LS_DATE_KEY, dateKey);
    }

    // Check if this session was already counted
    const sessionCounted = sessionStorage.getItem(LS_VISITED_KEY);

    // If not counted in this session, increment local counts
    if (!sessionCounted) {
        storedTotal++;
        storedToday++;
        localStorage.setItem(LS_TOTAL_KEY, storedTotal.toString());
        localStorage.setItem(LS_TODAY_KEY, storedToday.toString());
        sessionStorage.setItem(LS_VISITED_KEY, 'true');
    }

    try {
        // 1. Hit Total (Increment) - only if not counted in this session
        const totalUrl = sessionCounted
            ? `https://api.counterapi.dev/v1/${NAMESPACE}/${TOTAL_KEY}`
            : `https://api.counterapi.dev/v1/${NAMESPACE}/${TOTAL_KEY}/up`;

        const totalRes = await fetch(totalUrl, {
            method: 'GET',
            mode: 'cors'
        });

        if (!totalRes.ok) throw new Error(`HTTP ${totalRes.status}`);

        const totalData = await totalRes.json();
        const totalCount = (totalData.count || 0) + INITIAL_OFFSET;
        const statTotal = document.getElementById('stat-total');
        if (statTotal) statTotal.innerText = fmt(totalCount);

        // Sync local storage with API value
        localStorage.setItem(LS_TOTAL_KEY, (totalData.count || 0).toString());

        // 2. Hit Today (Increment) - only if not counted in this session
        const todayUrl = sessionCounted
            ? `https://api.counterapi.dev/v1/${NAMESPACE}/${TODAY_KEY}`
            : `https://api.counterapi.dev/v1/${NAMESPACE}/${TODAY_KEY}/up`;

        const todayRes = await fetch(todayUrl, {
            method: 'GET',
            mode: 'cors'
        });

        if (!todayRes.ok) throw new Error(`HTTP ${todayRes.status}`);

        const todayData = await todayRes.json();
        const statToday = document.getElementById('stat-today');
        if (statToday) statToday.innerText = fmt(todayData.count || 0);

        // Sync local storage with API value
        localStorage.setItem(LS_TODAY_KEY, (todayData.count || 0).toString());

    } catch (error) {
        console.error('API error, using local fallback:', error);
        // Use localStorage fallback values
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
            // Close document modal
            closeModal();

            // Close mobile menu
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
}

// ========== SERVICE WORKER ==========
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        // window.addEventListener('load') is not needed inside DOMContentLoaded usually,
        // but let's stick to the pattern if it was there or just call register.
        // Original code used window.addEventListener('load', ...), but if we call this from
        // DOMContentLoaded, 'load' might have passed or be pending.
        // Safer to just register or wait for load if performance is critical.
        // Given this is a static site, registering immediately is fine.
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered:', registration);
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    }
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

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

    // Update visitor stats
    updateVisitorStats();
});
