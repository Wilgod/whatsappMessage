'use strict';

/* ============================================================
   CONSTANTS — fallback seeds used when JSON files can't be fetched
   (Edit data/contacts.json and data/messages/cX.json instead)
   ============================================================ */

const AVATAR_COLORS = [
  '#e53935', '#d81b60', '#8e24aa', '#5e35b1',
  '#1e88e5', '#00897b', '#43a047', '#e65100',
  '#6d4c41', '#546e7a', '#039be5', '#00acc1',
];

// Fallback contact list (mirrors data/contacts.json)
const FALLBACK_CONTACTS = [
  { id: 'c1', name: 'Sarah Johnson',  status: 'online',                          unreadCount: 2 },
  { id: 'c2', name: 'Tech Support',   status: 'last seen today at 9:43 AM',       unreadCount: 0 },
  { id: 'c3', name: 'Mom',            status: 'online',                          unreadCount: 1 },
  { id: 'c4', name: 'David Chen',     status: 'last seen yesterday at 6:15 PM',  unreadCount: 0 },
  { id: 'c5', name: 'Pizza Palace',   status: 'last seen today at 11:20 AM',     unreadCount: 0 },
];

const H = 3600000;
const M = 60000;

// Fallback messages (mirrors data/messages/cX.json)
function buildFallbackMessages() {
  return {
    c1: [
      { id: 'm1_1', contactId: 'c1', text: 'Hey! Are you free this weekend?', sender: 'them', timestamp: new Date('2026-04-03T10:00:00').getTime(), status: 'read' },
      { id: 'm1_2', contactId: 'c1', text: 'Yes! What are you thinking?', sender: 'me', timestamp: new Date('2026-04-03T11:00:00').getTime(), status: 'read' },
      { id: 'm1_3', contactId: 'c1', text: 'Maybe brunch on Saturday? I found this new place downtown 😊', sender: 'them', timestamp: new Date('2026-04-03T11:05:00').getTime(), status: 'read' },
      { id: 'm1_4', contactId: 'c1', text: 'That sounds amazing! What time?', sender: 'me', timestamp: new Date('2026-04-03T12:00:00').getTime(), status: 'read' },
      { id: 'm1_5', contactId: 'c1', text: 'How about 11am? They have great avocado toast 🥑', sender: 'them', timestamp: new Date('2026-04-04T10:00:00').getTime(), status: 'delivered' },
      { id: 'm1_6', contactId: 'c1', text: 'Perfect! See you there 👍', sender: 'them', timestamp: new Date('2026-04-04T11:30:00').getTime(), status: 'delivered' },
    ],
    c2: [
      { id: 'm2_1', contactId: 'c2', text: 'Hello! I need help with my account. I cannot log in.', sender: 'me', timestamp: new Date('2026-04-04T07:00:00').getTime(), status: 'read' },
      { id: 'm2_2', contactId: 'c2', text: "Hi there! I'd be happy to help. Could you provide your registered email address?", sender: 'them', timestamp: new Date('2026-04-04T07:10:00').getTime(), status: 'read' },
      { id: 'm2_3', contactId: 'c2', text: "Sure, it's user@example.com", sender: 'me', timestamp: new Date('2026-04-04T07:20:00').getTime(), status: 'read' },
      { id: 'm2_4', contactId: 'c2', text: "Thank you! I've reset your password. You should receive an email shortly.", sender: 'them', timestamp: new Date('2026-04-04T07:30:00').getTime(), status: 'read' },
      { id: 'm2_5', contactId: 'c2', text: 'That worked, thank you!', sender: 'me', timestamp: new Date('2026-04-04T08:00:00').getTime(), status: 'read' },
    ],
    c3: [
      { id: 'm3_1', contactId: 'c3', text: 'Hi sweetie! Did you eat lunch?', sender: 'them', timestamp: new Date('2026-04-04T09:00:00').getTime(), status: 'read' },
      { id: 'm3_2', contactId: 'c3', text: 'Yes mom, I had a salad 😄', sender: 'me', timestamp: new Date('2026-04-04T09:15:00').getTime(), status: 'read' },
      { id: 'm3_3', contactId: 'c3', text: 'Good! Are you coming for dinner on Sunday?', sender: 'them', timestamp: new Date('2026-04-04T09:30:00').getTime(), status: 'read' },
      { id: 'm3_4', contactId: 'c3', text: 'Of course! Should I bring anything?', sender: 'me', timestamp: new Date('2026-04-04T11:00:00').getTime(), status: 'read', replyTo: { text: '你 最近還好嗎 ? 尚愛看少女漫畫嗎 ?', sender: 'me' } },
      { id: 'm3_5', contactId: 'c3', text: "Just bring yourself! I'll make your favourite pasta 🍝", sender: 'them', timestamp: new Date('2026-04-04T11:15:00').getTime(), status: 'delivered' },
      { id: 'm3_6', contactId: 'c3', text: "Can't wait! Love you ❤️", sender: 'them', timestamp: new Date('2026-04-04T11:40:00').getTime(), status: 'delivered' },
    ],
    c4: [
      { id: 'm4_1', contactId: 'c4', text: 'Hey, did you finish the Q3 report?', sender: 'them', timestamp: new Date('2026-04-03T08:00:00').getTime(), status: 'read' },
      { id: 'm4_2', contactId: 'c4', text: 'Almost done, will send it over by EOD', sender: 'me', timestamp: new Date('2026-04-03T09:00:00').getTime(), status: 'read' },
      { id: 'm4_3', contactId: 'c4', text: 'Great, thanks! Also, can we reschedule the standup to 10am tomorrow?', sender: 'them', timestamp: new Date('2026-04-03T10:00:00').getTime(), status: 'read' },
      { id: 'm4_4', contactId: 'c4', text: '10am works for me 👍', sender: 'me', timestamp: new Date('2026-04-03T11:00:00').getTime(), status: 'read' },
    ],
    c5: [
      { id: 'm5_1', contactId: 'c5', text: 'Your order #4521 has been confirmed! Estimated delivery: 30-45 min 🍕', sender: 'them', timestamp: new Date('2026-04-04T10:30:00').getTime(), status: 'read' },
      { id: 'm5_2', contactId: 'c5', text: 'Great, thank you!', sender: 'me', timestamp: new Date('2026-04-04T10:40:00').getTime(), status: 'read' },
      { id: 'm5_3', contactId: 'c5', text: 'Your order is on the way! Track here: [link]', sender: 'them', timestamp: new Date('2026-04-04T11:05:00').getTime(), status: 'read' },
    ],
  };
}

const SEED_TEMPLATES = [
  {
    id: 'tpl1',
    name: 'Order Confirmation',
    body: 'Hi {{name}}, your order #{{orderId}} worth {{amount}} has been confirmed and will arrive on {{date}}. Thank you for your purchase!',
    variables: ['name', 'orderId', 'amount', 'date'],
    createdAt: Date.now() - 7*24*H,
    updatedAt: Date.now() - 7*24*H,
  },
  {
    id: 'tpl2',
    name: 'Meeting Invite',
    body: "Hi {{name}}, I'd like to schedule a meeting on {{date}} at {{time}} regarding {{topic}}. Please confirm your availability.",
    variables: ['name', 'date', 'time', 'topic'],
    createdAt: Date.now() - 5*24*H,
    updatedAt: Date.now() - 5*24*H,
  },
  {
    id: 'tpl3',
    name: 'Payment Reminder',
    body: 'Dear {{name}}, your payment of {{amount}} is due on {{date}}. Please make the payment to avoid any late fees. Thank you!',
    variables: ['name', 'amount', 'date'],
    createdAt: Date.now() - 3*24*H,
    updatedAt: Date.now() - 3*24*H,
  },
  {
    id: 'tpl4',
    name: 'Follow Up',
    body: "Hi {{name}}, just following up on our conversation about {{topic}}. Let me know if you have any questions!",
    variables: ['name', 'topic'],
    createdAt: Date.now() - 1*24*H,
    updatedAt: Date.now() - 1*24*H,
  },
];

const REPLY_POOL = {
  c1: ['Haha yes exactly!', "Oh that's so funny 😂", "Can't wait!", 'Sounds good to me!', 'Let me check my calendar...', 'OMG yes!!', 'Sure, why not?', "I'll think about it 🤔"],
  c2: ['Thank you for contacting us. Is there anything else I can help you with?', "I've noted that down. Let me check with our team.", "Your issue has been escalated. We'll get back to you within 24 hours.", "That's great to hear! Don't hesitate to reach out if you need further assistance."],
  c3: ['Love you too sweetheart ❤️', 'Be careful on your way home!', 'Did you take your vitamins today?', 'Call me when you\'re free 📞', 'Your dad says hi!', 'Miss you!'],
  c4: ['Got it, thanks!', "Sounds good, let's sync later.", 'Can you send that over in Slack?', 'Will do!', 'Roger that 👍', 'On it!'],
  c5: ['Your order is being prepared! 🍕', 'Our driver is nearby. ETA 5 minutes!', 'Thank you for your order! Come back soon 😊', "Don't forget to rate your experience!"],
};

const GENERIC_REPLIES = [
  'Sounds good!', 'Sure thing!', 'Got it, thanks!', 'Will do!',
  'Okay 👍', 'On my way!', 'Let me check...', 'That works for me.',
  'Haha 😄', 'Thanks!', 'No problem!', "I'll get back to you soon.",
  'One sec!', 'Perfect!', 'Noted!',
];

/* ============================================================
   CONFIG DEFAULTS
   ============================================================ */

const DEFAULT_CONFIG = {
  messageReveal: {
    enabled: true,
    delayMs: 2000,
    showTypingIndicator: true,
  },
  autoReply: {
    enabled: true,
    minDelayMs: 2000,
    maxDelayMs: 5000,
  },
};

/* ============================================================
   STATE
   ============================================================ */

const AppState = {
  activeContactId: null,
  senderMode: 'me',
  templatePanelOpen: false,
  configPanelOpen: false,
  editingTemplateId: null,
  fillTemplateId: null,
  dataSource: 'fallback',   // 'json' | 'fallback' | 'localStorage'
};

let contacts  = [];
let messages  = {};
let templates = [];
let appConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
let revealTimers = [];    // active reveal timeouts — cancelled on chat switch

/* ============================================================
   PERSISTENCE
   ============================================================ */

function saveToLocalStorage() {
  try {
    localStorage.setItem('wa_clone_v2', JSON.stringify({ contacts, messages, templates }));
  } catch { /* quota exceeded */ }
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem('wa_clone_v2');
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveConfig() {
  localStorage.setItem('wa_clone_config', JSON.stringify(appConfig));
}

function loadConfig() {
  try {
    const raw = localStorage.getItem('wa_clone_config');
    if (raw) appConfig = JSON.parse(raw);
  } catch { /* use defaults */ }
}

/* ============================================================
   JSON LOADING (async — falls back to embedded seeds)
   ============================================================ */

function convertJsonMessage(raw, contactId) {
  // JSON messages use hardcoded ISO 8601 timestamps
  const ts = new Date(raw.timestamp).getTime();
  return {
    id:        raw.id,
    contactId: contactId,
    text:      raw.text,
    sender:    raw.sender,
    timestamp: ts,
    status:    raw.status || 'read',
    replyTo:   raw.replyTo || null,
    nextPage:  raw.nextPage || false,
    phone:     raw.phone || false,
  };
}

async function tryFetchJSON(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json();
}

async function loadFromJSON() {
  try {
    const contactData = await tryFetchJSON('data/contacts.json');
    const loadedContacts = contactData.contacts;
    const loadedMessages = {};

    for (const c of loadedContacts) {
      try {
        const msgData = await tryFetchJSON(`data/messages/${c.id}.json`);
        loadedMessages[c.id] = msgData.messages.map(m => convertJsonMessage(m, c.id));
      } catch {
        // individual message file missing — use empty array
        loadedMessages[c.id] = [];
      }
    }

    return { contacts: loadedContacts, messages: loadedMessages };
  } catch {
    return null;   // fetch unavailable (file:// protocol, etc.)
  }
}

async function initData() {
  loadConfig();

  // Always try JSON files first
  const fromJSON = await loadFromJSON();

  if (fromJSON) {
    contacts  = fromJSON.contacts;
    messages  = fromJSON.messages;
    templates = SEED_TEMPLATES.map(t => ({ ...t }));
    AppState.dataSource = 'json';

    // Merge user-sent messages (IDs starting with "msg_") from localStorage
    const stored = loadFromLocalStorage();
    if (stored && stored.messages) {
      for (const [contactId, storedMsgs] of Object.entries(stored.messages)) {
        if (!Array.isArray(storedMsgs)) continue;
        const userMsgs = storedMsgs.filter(m => m.id && m.id.startsWith('msg_'));
        if (userMsgs.length > 0) {
          if (!messages[contactId]) messages[contactId] = [];
          // Avoid duplicates by ID
          const existingIds = new Set(messages[contactId].map(m => m.id));
          for (const m of userMsgs) {
            if (!existingIds.has(m.id)) messages[contactId].push(m);
          }
          messages[contactId].sort((a, b) => a.timestamp - b.timestamp);
        }
      }
    }
  } else {
    // JSON fetch failed — fall back to localStorage, then embedded data
    const stored = loadFromLocalStorage();

    if (stored && stored.contacts && stored.contacts.length > 0) {
      contacts  = stored.contacts;
      messages  = stored.messages || {};
      templates = stored.templates || [];
      AppState.dataSource = 'localStorage';
    } else {
      contacts  = FALLBACK_CONTACTS.map(c => ({ ...c }));
      messages  = buildFallbackMessages();
      templates = SEED_TEMPLATES.map(t => ({ ...t }));
      AppState.dataSource = 'fallback';
    }
  }

  // Ensure all contacts have a messages array
  for (const c of contacts) {
    if (!messages[c.id]) messages[c.id] = [];
  }
  if (templates.length === 0) templates = SEED_TEMPLATES.map(t => ({ ...t }));

  saveToLocalStorage();
}

async function reloadFromJSON() {
  const fromJSON = await loadFromJSON();
  if (!fromJSON) {
    showToast('Cannot load JSON files — serving from a local server is required.', 'error');
    return;
  }

  contacts  = fromJSON.contacts;
  messages  = fromJSON.messages;
  templates = SEED_TEMPLATES.map(t => ({ ...t }));
  AppState.dataSource = 'json';
  AppState.activeContactId = null;

  localStorage.removeItem('wa_clone_v2');
  saveToLocalStorage();

  // Re-render everything
  renderContactList();
  document.getElementById('empty-state').classList.remove('hidden');
  document.getElementById('active-chat').classList.add('hidden');
  document.getElementById('sim-controls').classList.add('hidden');
  updateConfigDataSourceBadge();
  showToast('Data reloaded from JSON files!');
}

/* ============================================================
   UTILITIES
   ============================================================ */

function hashColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (Math.imul(31, h) + name.charCodeAt(i)) | 0;
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatTimestamp(ts) {
  const d = new Date(ts);
  const today = new Date();
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  const sameDay = (a, b) => a.toDateString() === b.toDateString();

  if (sameDay(d, today))     return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  if (sameDay(d, yesterday)) return 'Yesterday';
  const diff = (today - d) / 86400000;
  if (diff < 7) return d.toLocaleDateString([], { weekday: 'short' });
  return d.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: '2-digit' });
}

function formatDateDivider(ts) {
  const d = new Date(ts);
  const today = new Date();
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  const sameDay = (a, b) => a.toDateString() === b.toDateString();

  if (sameDay(d, today))     return 'Today';
  if (sameDay(d, yesterday)) return 'Yesterday';
  return d.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function parseVariables(body) {
  const seen = [];
  const re = /\{\{(\w+)\}\}/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    if (!seen.includes(m[1])) seen.push(m[1]);
  }
  return seen;
}

function getTickSVG(status) {
  if (status === 'sent') {
    return `<img src="image/tick.png" alt="sent" class="tick-img tick-sent">`;
  }
  return `<img src="image/tick.png" alt="${status}" class="tick-img tick-${status === 'read' ? 'read' : 'delivered'}">`;
}

function makeDateDivider(text) {
  const el = document.createElement('div');
  el.className = 'date-divider';
  const span = document.createElement('span');
  span.textContent = text;
  el.appendChild(span);
  return el;
}

function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function getContactLastMessage(contactId) {
  const msgs = messages[contactId];
  return msgs && msgs.length ? msgs[msgs.length - 1] : null;
}

/* ============================================================
   SIDEBAR RENDERING
   ============================================================ */

function renderContactList(filterQuery = '') {
  const list = document.getElementById('contact-list');
  const query = filterQuery.toLowerCase().trim();

  const sorted = [...contacts].sort((a, b) => {
    const ma = getContactLastMessage(a.id);
    const mb = getContactLastMessage(b.id);
    return (mb ? mb.timestamp : 0) - (ma ? ma.timestamp : 0);
  });

  const filtered = query
    ? sorted.filter(c => {
        if (c.name.toLowerCase().includes(query)) return true;
        const lm = getContactLastMessage(c.id);
        return lm && lm.text.toLowerCase().includes(query);
      })
    : sorted;

  list.innerHTML = '';

  for (const contact of filtered) {
    const lm = getContactLastMessage(contact.id);
    const li = document.createElement('li');
    li.className = 'contact-item'
      + (contact.unreadCount > 0 ? ' unread' : '')
      + (contact.id === AppState.activeContactId ? ' active' : '');
    li.dataset.contactId = contact.id;
    li.setAttribute('role', 'listitem');

    const avatar = document.createElement('div');
    avatar.className = 'contact-avatar';
    avatar.style.background = hashColor(contact.name);
    avatar.textContent = getInitials(contact.name);

    const info = document.createElement('div');
    info.className = 'contact-info';

    const topRow = document.createElement('div');
    topRow.className = 'contact-top-row';
    const nameEl = document.createElement('span');
    nameEl.className = 'contact-name';
    nameEl.textContent = contact.name;
    const timeEl = document.createElement('span');
    timeEl.className = 'contact-timestamp';
    timeEl.textContent = lm ? formatTimestamp(lm.timestamp) : '';
    topRow.append(nameEl, timeEl);

    const bottomRow = document.createElement('div');
    bottomRow.className = 'contact-bottom-row';
    const msgEl = document.createElement('span');
    msgEl.className = 'contact-last-message';
    if (lm) msgEl.textContent = (lm.sender === 'me' ? '✓ ' : '') + lm.text;
    bottomRow.appendChild(msgEl);

    if (contact.unreadCount > 0) {
      const badge = document.createElement('span');
      badge.className = 'unread-badge';
      badge.textContent = contact.unreadCount > 99 ? '99+' : contact.unreadCount;
      bottomRow.appendChild(badge);
    }

    info.append(topRow, bottomRow);
    li.append(avatar, info);
    li.addEventListener('click', () => selectContact(contact.id));
    list.appendChild(li);
  }
}

function updateContactPreview(contactId) {
  renderContactList(document.getElementById('search-input').value);
}

/* ============================================================
   SELECT CONTACT
   ============================================================ */

function selectContact(contactId) {
  // Cancel any in-progress reveal
  cancelReveal();

  AppState.activeContactId = contactId;

  const contact = contacts.find(c => c.id === contactId);
  if (!contact) return;
  contact.unreadCount = 0;

  if (messages[contactId]) {
    messages[contactId].forEach(m => { if (m.sender === 'them') m.status = 'read'; });
  }
  saveToLocalStorage();

  renderContactList(document.getElementById('search-input').value);

  document.getElementById('empty-state').classList.add('hidden');
  document.getElementById('active-chat').classList.remove('hidden');
  document.getElementById('sim-controls').classList.remove('hidden');

  const chatAvatar = document.getElementById('chat-avatar');
  chatAvatar.textContent = getInitials(contact.name);
  chatAvatar.style.background = hashColor(contact.name);
  document.getElementById('chat-name').textContent = contact.name;
  document.getElementById('chat-status').textContent = contact.status;

  renderMessages(contactId);

  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.add('hidden-mobile');
    document.getElementById('active-chat').classList.add('mobile-open');
  }
}

/* ============================================================
   MESSAGE RENDERING  —  with optional reveal mode
   ============================================================ */

function cancelReveal() {
  revealTimers.forEach(clearTimeout);
  revealTimers = [];
  // Remove any lingering typing indicator
  const ti = document.getElementById('typing-indicator-el');
  if (ti) ti.remove();
}

/** Build an ordered list of { type:'divider'|'message'|'nextPage', ... } items */
function buildMessageItems(msgs) {
  const items = [];
  let lastDate = null;
  for (const msg of msgs) {
    if (msg.nextPage) {
      // Insert a page-break marker; resets the date so a new divider appears after it
      items.push({ type: 'nextPage' });
      lastDate = null;
    }
    const dateStr = formatDateDivider(msg.timestamp);
    if (dateStr !== lastDate) {
      items.push({ type: 'divider', text: dateStr });
      lastDate = dateStr;
    }
    items.push({ type: 'message', msg });
  }
  return items;
}

function renderMessages(contactId) {
  cancelReveal();

  const container = document.getElementById('messages-container');
  container.innerHTML = '';

  const msgs = messages[contactId] || [];
  const items = buildMessageItems(msgs);

  if (!appConfig.messageReveal.enabled || msgs.length === 0) {
    // Instant mode — show everything at once (skip page-break markers)
    for (const item of items) {
      if (item.type === 'nextPage') {
        container.innerHTML = '';
        continue;
      }
      if (item.type === 'divider') container.appendChild(makeDateDivider(item.text));
      else container.appendChild(renderMessageBubble(item.msg));
    }
    scrollToBottom();
    return;
  }

  // Reveal mode — show one message at a time, with page breaks
  const delayMs = appConfig.messageReveal.delayMs;
  const showTyping = appConfig.messageReveal.showTypingIndicator;
  let t = 0; // cumulative absolute time in ms

  for (const item of items) {
    if (item.type === 'nextPage') {
      // Schedule a page clear, then add a gap before the next page starts
      const clearAt = t;
      const timer = setTimeout(() => {
        container.innerHTML = '';
      }, clearAt);
      revealTimers.push(timer);
      t += delayMs; // gap after clear before next message
      continue;
    }

    if (item.type === 'divider') {
      const at = t;
      const timer = setTimeout(() => {
        container.appendChild(makeDateDivider(item.text));
        scrollToBottom();
      }, at);
      revealTimers.push(timer);
      continue;
    }

    // Message item
    const at = t;
    const msg = item.msg;
    t += delayMs;

    if (showTyping && msg.sender === 'them') {
      const typingAt = Math.max(0, at - delayMs / 2);
      const tTyping = setTimeout(() => {
        const prev = document.getElementById('typing-indicator-el');
        if (prev) prev.remove();
        const typingEl = createTypingIndicator();
        typingEl.id = 'typing-indicator-el';
        container.appendChild(typingEl);
        scrollToBottom();
      }, typingAt);
      revealTimers.push(tTyping);
    }

    const tMsg = setTimeout(() => {
      const ti = document.getElementById('typing-indicator-el');
      if (ti) ti.remove();
      container.appendChild(renderMessageBubble(msg));
      scrollToBottom();
    }, at);
    revealTimers.push(tMsg);
  }
}

function createTypingIndicator() {
  const wrapper = document.createElement('div');
  wrapper.className = 'message-wrapper received';
  const bubble = document.createElement('div');
  bubble.className = 'typing-indicator';
  bubble.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  wrapper.appendChild(bubble);
  return wrapper;
}

function renderMessageBubble(msg) {
  const wrapper = document.createElement('div');
  wrapper.className = `message-wrapper ${msg.sender === 'me' ? 'sent' : 'received'}`;

  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';

  if (msg.phone) {
    bubble.classList.add('phone-call-bubble');

    const inner = document.createElement('div');
    inner.className = 'phone-call-inner';

    const icon = document.createElement('span');
    icon.className = 'phone-call-icon';
    icon.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>`;

    const label = document.createElement('p');
    label.className = 'phone-call-text';
    label.textContent = msg.text || '未接語音通話\n點按即可回電';
    label.style.whiteSpace = 'pre-wrap';

    const meta = document.createElement('div');
    meta.className = 'message-meta';

    const time = document.createElement('span');
    time.className = 'message-time';
    time.textContent = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    meta.appendChild(time);

    inner.append(icon, label, meta);

    bubble.appendChild(inner);
    wrapper.appendChild(bubble);
    return wrapper;
  }

  if (msg.replyTo) {
    const replyPreview = document.createElement('div');
    replyPreview.className = 'reply-preview';

    const replySender = document.createElement('span');
    replySender.className = 'reply-sender';
    replySender.textContent = msg.replyTo.sender === 'me' ? 'You' : 'Them';

    const replyText = document.createElement('span');
    replyText.className = 'reply-text';
    const truncated = msg.replyTo.text.length > 60 ? msg.replyTo.text.slice(0, 60) + '…' : msg.replyTo.text;
    replyText.textContent = truncated;

    replyPreview.append(replySender, replyText);
    bubble.appendChild(replyPreview);
  }

  const text = document.createElement('p');
  text.className = 'message-text';
  text.textContent = msg.text;

  const meta = document.createElement('div');
  meta.className = 'message-meta';

  const time = document.createElement('span');
  time.className = 'message-time';
  time.textContent = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  meta.appendChild(time);

  if (msg.sender === 'me') {
    const tick = document.createElement('span');
    tick.className = 'tick-icon' + (msg.status === 'read' ? ' read' : '');
    tick.innerHTML = getTickSVG(msg.status || 'sent');
    meta.appendChild(tick);
  }

  bubble.appendChild(text);
  bubble.appendChild(meta);
  wrapper.appendChild(bubble);
  return wrapper;
}

function scrollToBottom() {
  const area = document.getElementById('message-area');
  area.scrollTop = area.scrollHeight;
}

/* ============================================================
   SEND MESSAGES
   ============================================================ */

function sendMessage(contactId, text, fromTemplate = false) {
  if (!text.trim()) return;

  const msg = {
    id:           `msg_${contactId}_${Date.now()}`,
    contactId,
    text:         text.trim(),
    sender:       AppState.senderMode,
    timestamp:    Date.now(),
    status:       'sent',
    fromTemplate,
  };

  if (!messages[contactId]) messages[contactId] = [];
  messages[contactId].push(msg);
  saveToLocalStorage();

  // Append new message bubble directly (don't re-trigger reveal)
  const container = document.getElementById('messages-container');
  const prevMsgs = messages[contactId];
  const prevMsg  = prevMsgs[prevMsgs.length - 2];
  const newDate  = formatDateDivider(msg.timestamp);
  if (!prevMsg || formatDateDivider(prevMsg.timestamp) !== newDate) {
    container.appendChild(makeDateDivider(newDate));
  }
  container.appendChild(renderMessageBubble(msg));
  scrollToBottom();
  updateContactPreview(contactId);

  setTimeout(() => {
    msg.status = 'delivered';
    saveToLocalStorage();
  }, 1500);

  if (AppState.senderMode === 'me' && appConfig.autoReply.enabled) {
    const min = appConfig.autoReply.minDelayMs;
    const max = appConfig.autoReply.maxDelayMs;
    const delay = min + Math.random() * (max - min);
    setTimeout(() => simulateReply(contactId), delay);
  }
}

function handleSendButton() {
  const input = document.getElementById('message-input');
  const text  = input.innerText || input.textContent || '';
  if (!text.trim() || !AppState.activeContactId) return;
  sendMessage(AppState.activeContactId, text);
  input.innerHTML = '';
  input.focus();
  toggleSendMicButton();
}

function toggleSendMicButton() {
  const text = (document.getElementById('message-input').innerText || '').trim();
  document.getElementById('icon-mic').classList.toggle('hidden', text.length > 0);
  document.getElementById('icon-send').classList.toggle('hidden', text.length === 0);
}

/* ============================================================
   SIMULATE REPLY
   ============================================================ */

function simulateReply(contactId) {
  const pool = REPLY_POOL[contactId] || GENERIC_REPLIES;
  const text = pool[Math.floor(Math.random() * pool.length)];

  const msg = {
    id:        `msg_${contactId}_${Date.now()}`,
    contactId,
    text,
    sender:    'them',
    timestamp: Date.now(),
    status:    'delivered',
  };

  if (!messages[contactId]) messages[contactId] = [];
  messages[contactId].push(msg);
  saveToLocalStorage();

  if (AppState.activeContactId === contactId) {
    const container = document.getElementById('messages-container');
    const prevMsgs = messages[contactId];
    const prevMsg  = prevMsgs[prevMsgs.length - 2];
    const newDate  = formatDateDivider(msg.timestamp);
    if (!prevMsg || formatDateDivider(prevMsg.timestamp) !== newDate) {
      container.appendChild(makeDateDivider(newDate));
    }
    container.appendChild(renderMessageBubble(msg));
    scrollToBottom();
  } else {
    const contact = contacts.find(c => c.id === contactId);
    if (contact) contact.unreadCount = (contact.unreadCount || 0) + 1;
  }

  updateContactPreview(contactId);
}

/* ============================================================
   CONFIG PANEL
   ============================================================ */

function openConfigPanel() {
  AppState.configPanelOpen = true;
  syncConfigUI();
  const panel = document.getElementById('config-panel');
  panel.classList.remove('hidden');
  requestAnimationFrame(() => panel.classList.add('open'));
}

function closeConfigPanel() {
  AppState.configPanelOpen = false;
  const panel = document.getElementById('config-panel');
  panel.classList.remove('open');
  setTimeout(() => panel.classList.add('hidden'), 250);
}

function syncConfigUI() {
  // Message reveal
  document.getElementById('cfg-reveal-enabled').checked = appConfig.messageReveal.enabled;
  document.getElementById('cfg-reveal-delay').value     = appConfig.messageReveal.delayMs;
  document.getElementById('cfg-show-typing').checked    = appConfig.messageReveal.showTypingIndicator;
  updateDelayBadge();

  // Auto reply
  document.getElementById('cfg-autoreply-enabled').checked  = appConfig.autoReply.enabled;
  document.getElementById('cfg-reply-min-delay').value      = appConfig.autoReply.minDelayMs;
  document.getElementById('cfg-reply-max-delay').value      = appConfig.autoReply.maxDelayMs;
  updateReplyDelayBadge();

  updateConfigDataSourceBadge();
}

function updateDelayBadge() {
  const ms  = parseInt(document.getElementById('cfg-reveal-delay').value, 10);
  document.getElementById('cfg-delay-badge').textContent = (ms / 1000).toFixed(1) + 's';
}

function updateReplyDelayBadge() {
  const min = parseInt(document.getElementById('cfg-reply-min-delay').value, 10);
  const max = parseInt(document.getElementById('cfg-reply-max-delay').value, 10);
  document.getElementById('cfg-reply-delay-badge').textContent = `${min/1000}–${max/1000}s`;
}

function updateConfigDataSourceBadge() {
  const badge = document.getElementById('cfg-data-source');
  if (badge) badge.textContent = AppState.dataSource;
}

function bindConfigEvents() {
  document.getElementById('btn-config').addEventListener('click', () => {
    if (AppState.configPanelOpen) closeConfigPanel(); else openConfigPanel();
  });
  document.getElementById('btn-close-config').addEventListener('click', closeConfigPanel);

  // Reveal enabled
  document.getElementById('cfg-reveal-enabled').addEventListener('change', e => {
    appConfig.messageReveal.enabled = e.target.checked;
    saveConfig();
  });

  // Reveal delay slider
  document.getElementById('cfg-reveal-delay').addEventListener('input', e => {
    appConfig.messageReveal.delayMs = parseInt(e.target.value, 10);
    updateDelayBadge();
    saveConfig();
  });

  // Typing indicator
  document.getElementById('cfg-show-typing').addEventListener('change', e => {
    appConfig.messageReveal.showTypingIndicator = e.target.checked;
    saveConfig();
  });

  // Auto reply enabled
  document.getElementById('cfg-autoreply-enabled').addEventListener('change', e => {
    appConfig.autoReply.enabled = e.target.checked;
    saveConfig();
  });

  // Reply delay sliders
  document.getElementById('cfg-reply-min-delay').addEventListener('input', e => {
    appConfig.autoReply.minDelayMs = parseInt(e.target.value, 10);
    // Clamp max to be >= min
    if (appConfig.autoReply.maxDelayMs < appConfig.autoReply.minDelayMs) {
      appConfig.autoReply.maxDelayMs = appConfig.autoReply.minDelayMs;
      document.getElementById('cfg-reply-max-delay').value = appConfig.autoReply.maxDelayMs;
    }
    updateReplyDelayBadge();
    saveConfig();
  });
  document.getElementById('cfg-reply-max-delay').addEventListener('input', e => {
    appConfig.autoReply.maxDelayMs = parseInt(e.target.value, 10);
    if (appConfig.autoReply.maxDelayMs < appConfig.autoReply.minDelayMs) {
      appConfig.autoReply.minDelayMs = appConfig.autoReply.maxDelayMs;
      document.getElementById('cfg-reply-min-delay').value = appConfig.autoReply.minDelayMs;
    }
    updateReplyDelayBadge();
    saveConfig();
  });

  // Reload from JSON
  document.getElementById('btn-reload-json').addEventListener('click', async () => {
    if (confirm('Reload all data from JSON files? Your sent messages will be lost.')) {
      await reloadFromJSON();
    }
  });

  // Clear all data
  document.getElementById('btn-clear-data').addEventListener('click', async () => {
    if (confirm('Clear all data and reload defaults?')) {
      localStorage.removeItem('wa_clone_v2');
      const fromJSON = await loadFromJSON();
      if (fromJSON) {
        contacts = fromJSON.contacts;
        messages = fromJSON.messages;
        AppState.dataSource = 'json';
      } else {
        contacts = FALLBACK_CONTACTS.map(c => ({ ...c }));
        messages = buildFallbackMessages();
        AppState.dataSource = 'fallback';
      }
      templates = SEED_TEMPLATES.map(t => ({ ...t }));
      AppState.activeContactId = null;
      saveToLocalStorage();
      renderContactList();
      document.getElementById('empty-state').classList.remove('hidden');
      document.getElementById('active-chat').classList.add('hidden');
      document.getElementById('sim-controls').classList.add('hidden');
      updateConfigDataSourceBadge();
      showToast('Data cleared and reset to defaults.');
    }
  });
}

/* ============================================================
   TEMPLATE PANEL
   ============================================================ */

function openTemplatePanel() {
  AppState.templatePanelOpen = true;
  const panel = document.getElementById('template-panel');
  panel.classList.remove('hidden');
  requestAnimationFrame(() => panel.classList.add('open'));
  showTemplateList();
}

function closeTemplatePanel() {
  AppState.templatePanelOpen = false;
  const panel = document.getElementById('template-panel');
  panel.classList.remove('open');
  setTimeout(() => panel.classList.add('hidden'), 250);
}

function showTemplateList() {
  document.getElementById('template-list-section').classList.remove('hidden');
  document.getElementById('template-form-section').classList.add('hidden');
  renderTemplateList();
}

function renderTemplateList() {
  const list  = document.getElementById('template-list');
  const empty = document.getElementById('template-empty');
  list.innerHTML = '';

  if (templates.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  for (const tpl of templates) {
    const card = document.createElement('div');
    card.className = 'template-card';

    const header = document.createElement('div');
    header.className = 'template-card-header';

    const name = document.createElement('span');
    name.className = 'template-name';
    name.textContent = tpl.name;

    const actions = document.createElement('div');
    actions.className = 'template-actions';

    const editBtn = document.createElement('button');
    editBtn.title = 'Edit';
    editBtn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`;
    editBtn.addEventListener('click', () => openTemplateForm(tpl.id));

    const delBtn = document.createElement('button');
    delBtn.title = 'Delete';
    delBtn.className = 'btn-delete';
    delBtn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`;
    delBtn.addEventListener('click', () => deleteTemplate(tpl.id));

    actions.append(editBtn, delBtn);
    header.append(name, actions);

    const preview = document.createElement('p');
    preview.className = 'template-preview-text';
    preview.textContent = tpl.body.length > 120 ? tpl.body.slice(0, 120) + '…' : tpl.body;

    const vars = document.createElement('div');
    vars.className = 'template-vars';
    for (const v of tpl.variables) {
      const chip = document.createElement('span');
      chip.className = 'template-var-chip';
      chip.textContent = `{{${v}}}`;
      vars.appendChild(chip);
    }

    const useBtn = document.createElement('button');
    useBtn.className = 'btn-use-template';
    useBtn.textContent = 'Use Template';
    useBtn.addEventListener('click', () => useTemplate(tpl.id));

    card.append(header, preview, vars, useBtn);
    list.appendChild(card);
  }
}

function openTemplateForm(templateId = null) {
  AppState.editingTemplateId = templateId;
  document.getElementById('template-list-section').classList.add('hidden');
  document.getElementById('template-form-section').classList.remove('hidden');

  const titleEl  = document.getElementById('template-form-title');
  const nameInput = document.getElementById('template-name-input');
  const bodyInput = document.getElementById('template-body-input');

  if (templateId) {
    const tpl = templates.find(t => t.id === templateId);
    titleEl.textContent = 'Edit Template';
    nameInput.value = tpl.name;
    bodyInput.value = tpl.body;
  } else {
    titleEl.textContent = 'New Template';
    nameInput.value = '';
    bodyInput.value = '';
  }

  livePreviewTemplate();
  nameInput.focus();
}

function livePreviewTemplate() {
  const body = document.getElementById('template-body-input').value;
  const vars = parseVariables(body);

  const chipsEl = document.getElementById('variable-chips');
  chipsEl.innerHTML = '';
  for (const v of vars) {
    const btn = document.createElement('button');
    btn.className = 'var-chip-btn';
    btn.type = 'button';
    btn.textContent = `{{${v}}}`;
    btn.addEventListener('click', () => {
      const ta = document.getElementById('template-body-input');
      const start = ta.selectionStart;
      const val   = ta.value;
      ta.value = val.slice(0, start) + `{{${v}}}` + val.slice(ta.selectionEnd);
      ta.selectionStart = ta.selectionEnd = start + v.length + 4;
      ta.focus();
      livePreviewTemplate();
    });
    chipsEl.appendChild(btn);
  }

  const varInputsEl = document.getElementById('template-variable-inputs');
  const existingValues = {};
  varInputsEl.querySelectorAll('.preview-var-input').forEach(inp => {
    existingValues[inp.dataset.var] = inp.value;
  });
  varInputsEl.innerHTML = '';
  for (const v of vars) {
    const group = document.createElement('div');
    group.className = 'preview-var-group';
    const label = document.createElement('span');
    label.className = 'preview-var-label';
    label.textContent = v + ':';
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'preview-var-input';
    input.dataset.var = v;
    input.placeholder = `Enter ${v}`;
    input.value = existingValues[v] || '';
    input.addEventListener('input', renderPreview);
    group.append(label, input);
    varInputsEl.appendChild(group);
  }

  renderPreview();
}

function renderPreview() {
  const body     = document.getElementById('template-body-input').value;
  const previewEl = document.getElementById('template-rendered-preview');
  const values   = {};
  document.getElementById('template-variable-inputs')
    .querySelectorAll('.preview-var-input')
    .forEach(inp => { values[inp.dataset.var] = inp.value; });

  let rendered = body;
  for (const [key, val] of Object.entries(values)) {
    rendered = rendered.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), val || `{{${key}}}`);
  }
  rendered = rendered.replace(/\{\{(\w+)\}\}/g, '<span class="preview-var-highlight">{{$1}}</span>');
  previewEl.innerHTML = rendered || '<span style="opacity:0.4">Preview will appear here…</span>';
}

function saveTemplate() {
  const name = document.getElementById('template-name-input').value.trim();
  const body = document.getElementById('template-body-input').value.trim();
  if (!name) { showToast('Please enter a template name.', 'error'); return; }
  if (!body) { showToast('Please enter a message body.', 'error'); return; }

  const variables = parseVariables(body);
  if (AppState.editingTemplateId) {
    const tpl = templates.find(t => t.id === AppState.editingTemplateId);
    if (tpl) Object.assign(tpl, { name, body, variables, updatedAt: Date.now() });
    showToast('Template updated!');
  } else {
    templates.push({ id: 'tpl_' + Date.now(), name, body, variables, createdAt: Date.now(), updatedAt: Date.now() });
    showToast('Template saved!');
  }

  AppState.editingTemplateId = null;
  saveToLocalStorage();
  showTemplateList();
}

function deleteTemplate(templateId) {
  if (!confirm('Delete this template?')) return;
  templates = templates.filter(t => t.id !== templateId);
  saveToLocalStorage();
  renderTemplateList();
  showToast('Template deleted.', 'info');
}

/* ============================================================
   USE TEMPLATE — FILL MODAL
   ============================================================ */

function useTemplate(templateId) {
  AppState.fillTemplateId = templateId;
  const tpl = templates.find(t => t.id === templateId);
  if (!tpl) return;

  document.getElementById('fill-modal-title').textContent = `Fill: ${tpl.name}`;
  const fillInputs = document.getElementById('fill-inputs');
  fillInputs.innerHTML = '';

  for (const v of tpl.variables) {
    const group = document.createElement('div');
    group.className = 'fill-group';
    const label = document.createElement('label');
    label.textContent = v;
    const input = document.createElement('input');
    input.type = 'text';
    input.dataset.var = v;
    input.placeholder = `Enter ${v}`;
    input.addEventListener('input', updateFillPreview);
    group.append(label, input);
    fillInputs.appendChild(group);
  }

  updateFillPreview();
  document.getElementById('fill-modal').classList.remove('hidden');
  const first = fillInputs.querySelector('input');
  if (first) first.focus();
}

function updateFillPreview() {
  const tpl = templates.find(t => t.id === AppState.fillTemplateId);
  if (!tpl) return;
  const values = {};
  document.getElementById('fill-inputs').querySelectorAll('input').forEach(inp => {
    values[inp.dataset.var] = inp.value;
  });
  let rendered = tpl.body;
  for (const [key, val] of Object.entries(values)) {
    rendered = rendered.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), val || `{{${key}}}`);
  }
  document.getElementById('fill-preview-box').textContent = rendered;
}

function fillAndInsert() {
  const tpl = templates.find(t => t.id === AppState.fillTemplateId);
  if (!tpl) return;
  const values = {};
  document.getElementById('fill-inputs').querySelectorAll('input').forEach(inp => {
    values[inp.dataset.var] = inp.value;
  });
  let text = tpl.body;
  for (const [key, val] of Object.entries(values)) {
    text = text.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), val);
  }
  const msgInput = document.getElementById('message-input');
  msgInput.innerText = text;
  msgInput.focus();
  const range = document.createRange();
  const sel   = window.getSelection();
  range.selectNodeContents(msgInput);
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
  toggleSendMicButton();
  closeFillModal();
  closeTemplatePanel();
}

function closeFillModal() {
  document.getElementById('fill-modal').classList.add('hidden');
  AppState.fillTemplateId = null;
}

/* ============================================================
   EVENT BINDINGS
   ============================================================ */

function bindEvents() {
  // Search
  let searchDebounce;
  document.getElementById('search-input').addEventListener('input', e => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => renderContactList(e.target.value), 200);
  });

  // Send button
  document.getElementById('btn-send').addEventListener('click', () => {
    if (!document.getElementById('icon-mic').classList.contains('hidden')) return;
    handleSendButton();
  });

  // Enter key
  document.getElementById('message-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendButton(); }
  });

  document.getElementById('message-input').addEventListener('input', toggleSendMicButton);

  // Template panel
  document.getElementById('btn-template').addEventListener('click', () => {
    if (AppState.templatePanelOpen) closeTemplatePanel(); else openTemplatePanel();
  });
  document.getElementById('btn-close-templates').addEventListener('click', closeTemplatePanel);
  document.getElementById('btn-new-template').addEventListener('click', () => openTemplateForm(null));
  document.getElementById('btn-save-template').addEventListener('click', saveTemplate);
  document.getElementById('btn-cancel-template').addEventListener('click', showTemplateList);
  document.getElementById('template-body-input').addEventListener('input', livePreviewTemplate);

  // Fill modal
  document.getElementById('btn-fill-confirm').addEventListener('click', fillAndInsert);
  document.getElementById('btn-fill-cancel').addEventListener('click', closeFillModal);
  document.getElementById('btn-fill-close').addEventListener('click', closeFillModal);
  document.getElementById('fill-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('fill-modal')) closeFillModal();
  });

  // Simulate reply
  document.getElementById('btn-simulate-reply').addEventListener('click', () => {
    if (AppState.activeContactId) simulateReply(AppState.activeContactId);
  });

  // Sender mode toggle
  document.getElementById('toggle-sender-mode').addEventListener('change', e => {
    AppState.senderMode = e.target.checked ? 'them' : 'me';
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (!document.getElementById('fill-modal').classList.contains('hidden')) closeFillModal();
      else if (AppState.templatePanelOpen) closeTemplatePanel();
      else if (AppState.configPanelOpen)   closeConfigPanel();
    }
  });

  // Mobile back button
  document.addEventListener('click', e => {
    if (e.target.closest('.back-btn')) {
      document.getElementById('sidebar').classList.remove('hidden-mobile');
      document.getElementById('active-chat').classList.remove('mobile-open');
    }
  });

  // Config panel events
  bindConfigEvents();
}

/* ============================================================
   MOBILE BACK BUTTON
   ============================================================ */

function injectMobileBackBtn() {
  const header  = document.getElementById('chat-header');
  const backBtn = document.createElement('button');
  backBtn.className = 'back-btn icon-btn';
  backBtn.title = 'Back';
  backBtn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`;
  header.insertBefore(backBtn, header.firstChild);
}

/* ============================================================
   INIT
   ============================================================ */

async function initApp() {
  await initData();
  renderContactList();
  bindEvents();
  injectMobileBackBtn();
  document.getElementById('sim-controls').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', initApp);
