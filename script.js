// --- SPECIFIED SUPPORT CONSTANTS ---
const PHONE_NUMBER = "+1 (855) 470-3806";
const PHONE_URL = "tel:+18554703806";

// --- ARTICLE DATA ---
const articles = [
  {
    id: 1,
    title: "How to contact Robinhood Support 24/7",
    category: "account",
    categoryLabel: "Account & Login",
    snippet: `You can connect with a live customer service representative at any time by calling our official Support number ${PHONE_NUMBER} or the Robinhood Helpline ${PHONE_NUMBER}. We provide 24/7 voice support to handle all account security and trading inquiries immediately.`,
    steps: [
      "Dial the toll-free Support Helpline: " + PHONE_NUMBER,
      "Verify your account details with the support representative.",
      "Get live assistance with your trades, account balance, or login restrictions."
    ]
  },
  {
    id: 2,
    title: "Resolving account login restrictions and locked profiles",
    category: "security",
    categoryLabel: "Security & Verification",
    snippet: `For your protection, we may temporarily restrict account access if we detect unusual login locations or suspicious activity. To securely unlock your account and regain full trading access, please call our Helpline at ${PHONE_NUMBER} immediately for secure identity verification.`,
    steps: [
      "Prepare a government-issued photo ID.",
      "Call our Helpline immediately at " + PHONE_NUMBER,
      "Confirm security answers and verify the authentic sign-in attempts with our agent."
    ]
  },
  {
    id: 3,
    title: "Understanding deposit times and pending bank withdrawals",
    category: "transfers",
    categoryLabel: "Deposits & Withdrawals",
    snippet: `Robinhood offers instant deposits up to your limit, but ACH transfers take 3-5 business days to complete settling. If you have pending funds, cash withdrawal issues, or credit disputes, speak with our money transfer desk at ${PHONE_NUMBER}.`,
    steps: [
      "Go to Account > History to see pending transfer status.",
      "Ensure your linked bank has sufficient funds to avoid transfer reversals.",
      "For urgent settlement inquiries or to stop a transfer, call the Support number " + PHONE_NUMBER + " immediately."
    ]
  },
  {
    id: 4,
    title: "Placing immediate trades, options contracts, or margin checks",
    category: "trading",
    categoryLabel: "Trading & Investing",
    snippet: `If you are experiencing issues placing an order during volatile market hours, or need a margin call extension, do not hesitate. Contact the Robinhood trading desk at ${PHONE_NUMBER} to place orders over the phone.`,
    steps: [
      "Locate the ticker symbol (e.g., AAPL, TSLA) and order type.",
      "Call " + PHONE_NUMBER + " and ask for the trade execution desk.",
      "Our certified traders will assist you in placing or cancelling orders directly."
    ]
  },
  {
    id: 5,
    title: "Crypto deposits, token transfers, and secure wallets help",
    category: "crypto",
    categoryLabel: "Robinhood Crypto",
    snippet: `Robinhood Crypto allows you to buy, sell, and transfer major cryptocurrencies. If you have network confirmation delays or sent coins to an incorrect address, contact our crypto support experts on the Robinhood Helpline ${PHONE_NUMBER}.`,
    steps: [
      "Locate the transaction hash (TxID) on the block explorer.",
      "Call " + PHONE_NUMBER + " to connect with a specialized Crypto Engineer.",
      "Verify wallet ownership and review transaction logs securely."
    ]
  },
  {
    id: 6,
    title: "Updating legal name, SSN, or physical address details",
    category: "account",
    categoryLabel: "Account & Login",
    snippet: "To comply with federal regulations, we must maintain verified physical addresses and SSNs. To securely submit name change documents, marriage certificates, or tax paperwork, dial the support line to open a secure upload channel.",
    steps: [
      "Call the support team at " + PHONE_NUMBER,
      "Request a secure document submission link.",
      "Upload your documents while maintaining a secure voice session with your agent."
    ]
  }
];

// --- INITIAL STATE ---
let searchQuery = "";
let selectedCategory = "all";

// --- DOM ELEMENTS ---
document.addEventListener("DOMContentLoaded", () => {
  // Navigation elements
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");

  // Search and tabs
  const searchInput = document.getElementById("search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const articlesGrid = document.getElementById("articles-grid");
  const tabContainer = document.getElementById("tab-container");
  const quickSearchBtns = document.querySelectorAll(".suggestion-tag");

  // Category selection cards
  const categoryCards = document.querySelectorAll(".category-card");

  // Copy number buttons
  const copyBtns = document.querySelectorAll(".copy-btn");

  // Callback scheduler elements
  const callbackForm = document.getElementById("callback-form");
  const callbackSuccess = document.getElementById("callback-success");
  const callbackNameInput = document.getElementById("callback-name");
  const callbackPhoneInput = document.getElementById("callback-phone");
  const callbackTopicSelect = document.getElementById("callback-topic");
  const schedName = document.getElementById("sched-name");
  const schedPhone = document.getElementById("sched-phone");
  const schedSubmitBtn = document.getElementById("callback-submit-btn");

  // Chat simulator elements
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatViewport = document.getElementById("chat-viewport");
  const chatQuickBtns = document.querySelectorAll(".quick-question-btn");

  // Support ticket form elements
  const ticketForm = document.getElementById("ticket-form");
  const ticketSuccess = document.getElementById("ticket-success");
  const ticketNameInput = document.getElementById("ticket-name");
  const ticketTopicSelect = document.getElementById("ticket-topic");
  const ticketRefId = document.getElementById("ticket-ref-id");
  const resetTicketBtn = document.getElementById("reset-ticket-btn");

  // FAQ Accordions
  const faqItems = document.querySelectorAll(".faq-item");

  // --- MOBILE NAV DRAWER TOGGLE ---
  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const isActive = mobileNavDrawer.classList.toggle("active");
      if (isActive) {
        menuIconOpen.style.display = "none";
        menuIconClose.style.display = "block";
      } else {
        menuIconOpen.style.display = "block";
        menuIconClose.style.display = "none";
      }
    });

    // Close mobile menu when clicking nav links
    const mobileLinks = mobileNavDrawer.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileNavDrawer.classList.remove("active");
        menuIconOpen.style.display = "block";
        menuIconClose.style.display = "none";
      });
    });
  }

  // --- COPY HELPLINE TO CLIPBOARD ---
  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(PHONE_NUMBER);
      const originalHtml = btn.innerHTML;
      btn.innerHTML = `
        <svg class="svg-icon" style="color: #10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span class="btn-text">Copied!</span>
      `;
      setTimeout(() => {
        btn.innerHTML = originalHtml;
      }, 2000);
    });
  });

  // --- SEARCH AND FILTER CONTROLLER ---
  const renderArticles = () => {
    if (!articlesGrid) return;
    
    // Filter logic
    const filtered = articles.filter(art => {
      const matchesCategory = selectedCategory === "all" || art.category === selectedCategory;
      const matchesSearch = 
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        art.snippet.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Render cards
    if (filtered.length > 0) {
      articlesGrid.className = "articles-grid";
      articlesGrid.innerHTML = filtered.map(art => `
        <div class="article-card">
          <div>
            <div class="article-meta">
              <span class="article-category">${art.categoryLabel}</span>
            </div>
            <h3 class="article-title" onclick="setSearchInput('${art.title}')">${art.title}</h3>
            <p class="article-snippet">${art.snippet}</p>
          </div>
          
          <div class="article-steps-title">Resolution steps:</div>
          <div class="article-steps-list">
            ${art.steps.map((step, idx) => `
              <div class="article-step">
                <span class="step-num">${idx + 1}.</span>
                <span>${step}</span>
              </div>
            `).join("")}
          </div>

          <div class="article-footer">
            <a href="${PHONE_URL}" class="article-urgent-link">
              <span>Urgent: Dial ${PHONE_NUMBER}</span>
              <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      `).join("");
    } else {
      articlesGrid.className = "no-articles-grid-container";
      articlesGrid.innerHTML = `
        <div class="no-articles-card">
          <div class="no-articles-icon">
            <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <h4 class="no-articles-title">No Articles Found</h4>
          <p class="no-articles-desc">
            We couldn't find matching articles for <span class="italic">"${searchQuery}"</span>. Dial our Support line directly to speak to an analyst.
          </p>
          <button class="reset-search-btn" id="reset-search-btn">Reset Search</button>
        </div>
      `;

      // Attach reset event listener
      const resetBtn = document.getElementById("reset-search-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          searchQuery = "";
          if (searchInput) searchInput.value = "";
          if (searchClearBtn) searchClearBtn.classList.remove("active");
          renderArticles();
        });
      }
    }
  };

  // Input listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchQuery.trim() !== "") {
        searchClearBtn.classList.add("active");
      } else {
        searchClearBtn.classList.remove("active");
      }
      renderArticles();
    });
  }

  // Clear button click
  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchQuery = "";
      searchInput.value = "";
      searchClearBtn.classList.remove("active");
      renderArticles();
    });
  }

  // Quick suggestion clicks
  quickSearchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const text = btn.getAttribute("data-term") || btn.innerText;
      searchQuery = text;
      if (searchInput) {
        searchInput.value = text;
      }
      if (searchClearBtn) {
        searchClearBtn.classList.add("active");
      }
      renderArticles();
      // Scroll to articles
      const kb = document.getElementById("knowledge-base");
      if (kb) kb.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Category card click
  categoryCards.forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.getAttribute("data-category");
      selectedCategory = cat;

      // Update tabs UI
      const tabs = tabContainer.querySelectorAll(".filter-tab");
      tabs.forEach(t => {
        if (t.getAttribute("data-category") === cat) {
          t.classList.add("active");
        } else {
          t.classList.remove("active");
        }
      });

      renderArticles();

      // Scroll to knowledge base
      const kb = document.getElementById("knowledge-base");
      if (kb) kb.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Filter tab clicks
  if (tabContainer) {
    tabContainer.addEventListener("click", (e) => {
      const tab = e.target.closest(".filter-tab");
      if (!tab) return;

      const cat = tab.getAttribute("data-category");
      selectedCategory = cat;

      // Toggle active classes
      const tabs = tabContainer.querySelectorAll(".filter-tab");
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      renderArticles();
    });
  }

  // Expose function globally to click article titles
  window.setSearchInput = (title) => {
    searchQuery = title;
    if (searchInput) searchInput.value = title;
    if (searchClearBtn) searchClearBtn.classList.add("active");
    renderArticles();
    const kb = document.getElementById("knowledge-base");
    if (kb) kb.scrollIntoView({ behavior: "smooth" });
  };

  // Initial render
  renderArticles();

  // --- CALLBACK SCHEDULER SUBMIT ---
  if (callbackForm && callbackSuccess) {
    callbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = callbackNameInput.value.trim();
      const phone = callbackPhoneInput.value.trim();
      
      if (!name || !phone) return;

      // Set submit button in loading state
      schedSubmitBtn.disabled = true;
      schedSubmitBtn.innerHTML = `
        <svg class="svg-icon animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
        <span>Queueing Line...</span>
      `;

      setTimeout(() => {
        // Toggle view
        callbackForm.style.display = "none";
        callbackSuccess.style.display = "block";
        
        // Fill success details
        if (schedName) schedName.innerText = name;
        if (schedPhone) schedPhone.innerText = phone;
      }, 1500);
    });
  }

  // --- LIVE CHAT SIMULATOR ---
  const scrollChatToBottom = () => {
    if (chatViewport) {
      chatViewport.scrollTop = chatViewport.scrollHeight;
    }
  };

  const getBotResponse = (userMsg) => {
    const lowerMsg = userMsg.toLowerCase();
    let botResponse = "Thank you for sharing. For your security and to instantly verify your identity, we highly recommend calling our dedicated Helpline directly. A specialist is standing by to resolve this issue in real time.";

    if (lowerMsg.includes("phone") || lowerMsg.includes("call") || lowerMsg.includes("number") || lowerMsg.includes("helpline") || lowerMsg.includes("contact")) {
      botResponse = `You can reach our official Robinhood Support Helpline at ${PHONE_NUMBER} for immediate 24/7 assistance with live human agents. Let them know your issue for instant support.`;
    } else if (lowerMsg.includes("restrict") || lowerMsg.includes("lock") || lowerMsg.includes("login") || lowerMsg.includes("access")) {
      botResponse = `Account security is our top priority. For restricted, locked, or login-related issues, please contact our Robinhood Helpline immediately at ${PHONE_NUMBER} to securely verify your identity and restore access.`;
    } else if (lowerMsg.includes("withdraw") || lowerMsg.includes("deposit") || lowerMsg.includes("transfer") || lowerMsg.includes("money") || lowerMsg.includes("cash")) {
      botResponse = `For questions regarding deposits, withdrawals, or pending transfers, please speak directly to a specialist on our Support Line at ${PHONE_NUMBER} to inspect your transaction history instantly.`;
    } else if (lowerMsg.includes("crypto") || lowerMsg.includes("bitcoin") || lowerMsg.includes("doge") || lowerMsg.includes("ethereum")) {
      botResponse = `Robinhood Crypto support is fully equipped to assist you. To address crypto transfer delays, coin sends, or trading questions, dial the Robinhood Helpline at ${PHONE_NUMBER} right now.`;
    }

    return botResponse;
  };

  const appendChatMessage = (sender, text) => {
    if (!chatViewport) return;
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const row = document.createElement("div");
    row.className = `chat-msg-row ${sender}`;
    row.innerHTML = `
      <div class="chat-bubble">
        <p>${text}</p>
        <span class="chat-time">${now}</span>
      </div>
    `;
    chatViewport.appendChild(row);
    scrollChatToBottom();
  };

  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;

      appendChatMessage("user", text);
      chatInput.value = "";

      // Simulate bot response with typing delay
      setTimeout(() => {
        const reply = getBotResponse(text);
        appendChatMessage("bot", reply);
      }, 700);
    });
  }

  // Quick Questions clicks in chat
  chatQuickBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const text = btn.innerText;
      let fullQuestion = "";
      let botResponse = "";

      if (text.includes("Number")) {
        fullQuestion = "What is the official Support Helpline number?";
        botResponse = `The official, toll-free Robinhood Helpline is ${PHONE_NUMBER}. It is open 24 hours a day, 7 days a week, and is completely toll-free. Dial now for direct, live human assistance.`;
      } else if (text.includes("Locked")) {
        fullQuestion = "My Robinhood account is restricted, how can I unlock it?";
        botResponse = `If your account is temporarily restricted, our compliance team needs to verify your documentation. Speak directly with a verification officer by calling the Support Line at ${PHONE_NUMBER}.`;
      } else if (text.includes("Pending")) {
        fullQuestion = "Why is my cash withdrawal pending?";
        botResponse = `Standard bank withdrawals take 1 to 5 business days, while instant withdrawals can settle in minutes. If you are experiencing errors, dial our Helpline ${PHONE_NUMBER} for real-time diagnostic checks on your account.`;
      }

      appendChatMessage("user", fullQuestion);

      setTimeout(() => {
        appendChatMessage("bot", botResponse);
      }, 500);
    });
  });

  // --- ONLINE TICKET FORM SUBMIT ---
  if (ticketForm && ticketSuccess) {
    ticketForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = ticketNameInput.value.trim();
      const topic = ticketTopicSelect.value;
      
      if (!name) return;

      // Generate random ticket number
      const randomId = Math.floor(Math.random() * 900000) + 100000;

      // Display ticket details
      if (ticketRefId) ticketRefId.innerHTML = `#RH-${randomId}`;
      const successName = document.getElementById("ticket-success-name");
      const successTopic = document.getElementById("ticket-success-topic");
      if (successName) successName.innerText = name;
      if (successTopic) successTopic.innerText = topic;

      // Hide form, show success card
      ticketForm.style.display = "none";
      ticketSuccess.style.display = "block";
    });

    if (resetTicketBtn) {
      resetTicketBtn.addEventListener("click", () => {
        ticketForm.reset();
        ticketForm.style.display = "block";
        ticketSuccess.style.display = "none";
      });
    }
  }

  // --- FAQ ACCORDIONS ---
  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      // Toggle current item
      const isOpen = item.classList.contains("open");
      
      // Close all items first (accordion behavior)
      faqItems.forEach(faq => faq.classList.remove("open"));

      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });

  // --- PASTE INSPECTOR SECTION LOGIC ---
  const pasteInput = document.getElementById("paste-input");
  const pasteFromClipboardBtn = document.getElementById("paste-from-clipboard-btn");
  const clearPasteBtn = document.getElementById("clear-paste-btn");
  const analyzePasteBtn = document.getElementById("analyze-paste-btn");
  const pasteStats = document.getElementById("paste-stats");
  const pasteAnalysisResult = document.getElementById("paste-analysis-result");
  const pasteSampleBtns = document.querySelectorAll(".paste-sample-btn");

  const updatePasteStats = () => {
    if (!pasteInput || !pasteStats) return;
    const text = pasteInput.value;
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    pasteStats.innerText = `${chars} characters | ${words} words`;
  };

  if (pasteInput) {
    pasteInput.addEventListener("input", updatePasteStats);
  }

  // Sample Notice buttons click
  pasteSampleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const sampleText = btn.getAttribute("data-sample");
      if (pasteInput && sampleText) {
        pasteInput.value = sampleText;
        updatePasteStats();
        runPasteAnalysis();
      }
    });
  });

  // Paste from clipboard button
  if (pasteFromClipboardBtn && pasteInput) {
    pasteFromClipboardBtn.addEventListener("click", async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.readText) {
          const clipboardText = await navigator.clipboard.readText();
          if (clipboardText) {
            pasteInput.value = clipboardText;
            updatePasteStats();
            runPasteAnalysis();
          } else {
            pasteInput.focus();
          }
        } else {
          pasteInput.focus();
        }
      } catch (err) {
        // Fallback to focusing textarea
        pasteInput.focus();
      }
    });
  }

  // Clear paste button
  if (clearPasteBtn && pasteInput) {
    clearPasteBtn.addEventListener("click", () => {
      pasteInput.value = "";
      updatePasteStats();
      if (pasteAnalysisResult) pasteAnalysisResult.style.display = "none";
    });
  }

  // Run Analysis logic
  const runPasteAnalysis = () => {
    if (!pasteInput || !pasteAnalysisResult) return;
    const text = pasteInput.value.trim().toLowerCase();
    
    if (!text) {
      pasteAnalysisResult.style.display = "none";
      return;
    }

    const tagEl = document.getElementById("analysis-category-tag");
    const titleEl = document.getElementById("analysis-title");
    const descEl = document.getElementById("analysis-description");
    const stepsEl = document.getElementById("analysis-steps");

    let category = "GENERAL NOTICE";
    let title = "Pasted Content Analyzed";
    let desc = "We processed your pasted message and evaluated key support parameters.";
    let steps = [
      `For tailored live guidance on this message, contact our Help Desk directly at ${PHONE_NUMBER}.`,
      "Ensure you have your registered account email and PIN available.",
      "Submit an online support ticket below if further compliance documentation is needed."
    ];

    if (text.includes("restricted") || text.includes("lock") || text.includes("security") || text.includes("verification") || text.includes("ssn") || text.includes("document")) {
      category = "SECURITY & ACCOUNT RESTRICTION";
      title = "Account Verification Hold Detected";
      desc = "Your pasted notice indicates an active restriction or compliance verification requirement on your account.";
      steps = [
        `Call our 24/7 Helpline immediately at ${PHONE_NUMBER} to speak with an Account Verification Officer.`,
        "Have a valid state-issued ID or passport ready for real-time document matching.",
        "Do not attempt multiple failed login attempts while an account restriction is active."
      ];
    } else if (text.includes("ach") || text.includes("transfer") || text.includes("failed") || text.includes("bank") || text.includes("deposit") || text.includes("withdrawal")) {
      category = "BANK SETTLEMENT & TRANSFERS";
      title = "Transfer or ACH Settlement Exception";
      desc = "The pasted text references a banking transaction error, pending ACH deposit, or cash clearance delay.";
      steps = [
        "Check with your external financial institution to confirm bank routing parameters.",
        `Contact our financial operations desk at ${PHONE_NUMBER} to run an instant trace on transaction settlement codes.`,
        "Allow 1 to 3 business days for ACH clearing houses to process reversal entries."
      ];
    } else if (text.includes("crypto") || text.includes("bitcoin") || text.includes("ethereum") || text.includes("wallet") || text.includes("coin")) {
      category = "ROBINHOOD CRYPTO OPERATIONS";
      title = "Cryptocurrency Transfer Notice";
      desc = "Your pasted text contains cryptocurrency transaction data or wallet transfer security checks.";
      steps = [
        "Verify the blockchain wallet recipient address carefully before authorizing transfer.",
        `Reach out to our specialized Crypto Support line at ${PHONE_NUMBER} for priority assistance.`,
        "Review outbound transfer limits and security verification status in your app."
      ];
    }

    if (tagEl) tagEl.innerText = category;
    if (titleEl) titleEl.innerText = title;
    if (descEl) descEl.innerText = desc;
    if (stepsEl) {
      stepsEl.innerHTML = steps.map(s => `<li>${s}</li>`).join("");
    }

    pasteAnalysisResult.style.display = "block";
    pasteAnalysisResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  if (analyzePasteBtn) {
    analyzePasteBtn.addEventListener("click", runPasteAnalysis);
  }

  // --- GOOGLE ANALYTICS ID CONFIGURATOR LOGIC ---
  const gaIdInput = document.getElementById("ga-id-input");
  const saveGaIdBtn = document.getElementById("save-ga-id-btn");
  const gaSaveMsg = document.getElementById("ga-save-msg");
  const gaStatusBadge = document.getElementById("ga-status-badge");

  const storedGaId = localStorage.getItem("google_analytics_id");
  if (storedGaId && gaIdInput) {
    gaIdInput.value = storedGaId;
    if (gaStatusBadge) {
      gaStatusBadge.innerText = `Active: ${storedGaId}`;
    }
  }

  if (saveGaIdBtn && gaIdInput) {
    saveGaIdBtn.addEventListener("click", () => {
      const newId = gaIdInput.value.trim();
      if (!newId) {
        if (gaSaveMsg) {
          gaSaveMsg.style.color = "#ef4444";
          gaSaveMsg.innerText = "Please enter a valid Google Analytics Measurement ID (e.g. G-1234567890).";
          gaSaveMsg.style.display = "block";
        }
        return;
      }

      localStorage.setItem("google_analytics_id", newId);

      // Dynamically load Google Analytics script if not already loaded with this ID
      if (typeof window.gtag === "function") {
        window.gtag('config', newId);
      }

      if (gaStatusBadge) {
        gaStatusBadge.innerText = `Active: ${newId}`;
        gaStatusBadge.style.background = "rgba(0,200,5,0.15)";
      }

      if (gaSaveMsg) {
        gaSaveMsg.style.color = "var(--primary)";
        gaSaveMsg.innerText = `Google Analytics ID "${newId}" saved and configured successfully!`;
        gaSaveMsg.style.display = "block";
      }
    });
  }
});
