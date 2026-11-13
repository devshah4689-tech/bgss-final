/**
 * BGSS & Associates — Knowledge Bank Interactive Engine
 * assets/js/knowledge-bank.js
 * 
 * Features:
 *  1. 3D Flipbook Reader with realistic page-turning animation and document download
 *  2. In-Website Interactive Presentation Slide Player with multiple slide decks
 *  3. In-Website YouTube Cinema Video Player with dynamic playlist switcher
 *  4. Quick Search & Sticky Sub-Navigation
 */

(function () {
  'use strict';

  /* ==========================================================================
     DATA REPOSITORY: EBOOKS, PRESENTATIONS & VIDEOS
     ========================================================================== */

  let EBOOKS_DATA = [
    {
      id: 'swadesh-fema-guide',
      title: 'SWADESH: Desh Ki Mitti Pukare',
      subtitle: 'The FEMA Companion for Returning Indians',
      author: 'BGSS & Associates',
      theme: 'theme-navy',
      badge: 'FEMA Guide • 2026 Living Edition',
      year: '2026',
      pagesCount: 74,
      tags: ['FEMA Sec. 6(4)', 'Returning Indians', 'RFC Account', 'Schedule FA', 'RNOR Tax Window', 'Foreign Trusts'],
      summary: 'Featuring Mr. Jignesh Patel’s Journey Home from New Jersey to Bhavnagar. A practitioner’s authoritative guide covering Section 6(4), RFC Account, 401(k), ESOPs & RSUs, Foreign Trusts, US Real Estate, Crypto, RNOR, Schedule FA, DTAA, and GIFT City.',
      downloadUrl: '/assets/ebooks/BGSS-Swadesh-FEMA-Returning-Indians.pdf',
      pdfUrl: '/assets/ebooks/BGSS-Swadesh-FEMA-Returning-Indians.pdf',
      pages: []
    },
    {
      id: 'philosophy-fast-ds',
      title: 'गलती to क्षमा: The Philosophy Behind FAST-DS',
      subtitle: 'Foreign Assets of Small Taxpayers – Disclosure Scheme, 2026',
      author: 'BGSS & Associates',
      theme: 'theme-gold',
      badge: 'Foreign Assets Scheme • 2026 Special Edition',
      year: '2026',
      pagesCount: 56,
      tags: ['FAST-DS 2026', 'Foreign Assets', 'Schedule FA', 'Black Money Act', 'Finance Act 2026'],
      summary: 'Foreign Assets of Small Taxpayers – Disclosure Scheme, 2026. An executive masterguide examining the philosophy behind FAST-DS, Category 1 vs 2 classification, forensic valuation, CRS/FATCA data tracing, and statutory immunity under the Black Money Act.',
      downloadUrl: '/assets/ebooks/BGSS-Philosophy-Behind-FAST-DS.pdf',
      pdfUrl: '/assets/ebooks/BGSS-Philosophy-Behind-FAST-DS.pdf',
      pages: []
    }
  ];

  let PRESENTATIONS_DATA = [
    {
      id: 'pres-itat-defense',
      title: 'Tax Controversy & Appellate Defense Strategies at ITAT',
      speaker: 'Saumya Sheth, Partner',
      badge: 'Appellate Litigation Masterdeck',
      duration: '45 Slides • Updated Q3 2024',
      slides: [
        {
          topic: 'Assessment Defense • Slide 1 of 5',
          title: 'The Modern Tax Controversy Landscape in India',
          bullets: [
            'Shift from manual scrutiny to the National Faceless Assessment Centre (NFAC).',
            'Algorithmic risk profiling via Insight Portal, AIS (Annual Information Statement), and SFT triggers.',
            'Surge in jurisdictional disputes under amended Section 148, 148A, and Section 144B.'
          ],
          cards: [
            { title: 'NFAC Regime', desc: 'Faceless allocation of cases without geographical nexus.' },
            { title: 'AIS Cross-Checks', desc: 'Real-time reconciliation of high-value transactions.' },
            { title: 'Penalty Defense', desc: 'Sec. 270A immunity applications filed within 30 days.' }
          ],
          slideNum: '01 / 05'
        },
        {
          topic: 'Appellate Advocacy • Slide 2 of 5',
          title: 'Section 148A Jurisdictional Challenges',
          bullets: [
            'Right to receive all underlying "information" relied upon by the Assessing Officer.',
            'Minimum 7-day show cause reply window under clause (b) is mandatory and non-negotiable.',
            'Order under clause (d) must deal with each primary objection raised by the taxpayer.'
          ],
          cards: [
            { title: 'Ashoke Kumar Doctrine', desc: 'Supreme Court guidelines on time-barred reassessments.' },
            { title: 'Borrowed Satisfaction', desc: 'Reopening based solely on third-party emails is impermissible.' },
            { title: 'Article 226 Writs', desc: 'Immediate High Court intervention when notice is non-compliant.' }
          ],
          slideNum: '02 / 05'
        },
        {
          topic: 'Evidence Building • Slide 3 of 5',
          title: 'Evidentiary Standards for Cash Credits (Sec. 68)',
          bullets: [
            'The three-pronged test: Identity of creditor, Creditworthiness, and Genuineness of transaction.',
            'Proviso to Section 68: Onus on closely held companies to substantiate "source of the source".',
            'Cross-examination of third-party witnesses whose statements are cited by the Department.'
          ],
          cards: [
            { title: 'Identity', desc: 'PAN, MCA filings, and active corporate status.' },
            { title: 'Creditworthiness', desc: 'Audited balance sheets, net worth, and cash flows.' },
            { title: 'Genuineness', desc: 'Banking channels, commercial rationale, and contracts.' }
          ],
          slideNum: '03 / 05'
        },
        {
          topic: 'ITAT Proceedings • Slide 4 of 5',
          title: 'ITAT Bench Trial Tactics & Paper Book Architecture',
          bullets: [
            'Preparation of the Comprehensive Paper Book strictly under Rule 18 of ITAT Rules.',
            'Separate legal compilation of binding Jurisdictional High Court and coordinate bench rulings.',
            'Handling departmental Remand Reports and Rule 46A admission of crucial records.'
          ],
          cards: [
            { title: 'Rule 18 Rules', desc: 'Exact cross-referencing and AO-stamped certifications.' },
            { title: 'Stay of Demand', desc: 'Sec. 254(2A) stay petitions with statutory deposit compliance.' },
            { title: 'Bench Precedents', desc: 'Co-ordinate bench views cannot be lightly ignored by AO.' }
          ],
          slideNum: '04 / 05'
        },
        {
          topic: 'Strategic Wrap • Slide 5 of 5',
          title: 'Key Takeaways for Corporate Tax Directors',
          bullets: [
            'Build contemporaneous factual files before assessment closure—not at the High Court stage.',
            'Maintain audit trails for intra-group allocations, loans, and capitalization structures.',
            'Engage appellate counsel at the show-cause stage to prevent prejudicial factual admissions.'
          ],
          cards: [
            { title: 'Audit Trail', desc: 'Maintain complete digital archives for 10 assessment years.' },
            { title: 'Early Counsel', desc: 'Involve specialized ITAT counsel from Section 148A notice stage.' },
            { title: 'Executive Summary', desc: 'Present lucid factual summaries to appellate judges.' }
          ],
          slideNum: '05 / 05'
        }
      ]
    },
    {
      id: 'pres-tp-beps',
      title: 'Transfer Pricing Defense & OECD Pillar Two Framework',
      speaker: 'Shalibhadra Shah, Partner',
      badge: 'International Tax Masterdeck',
      duration: '38 Slides • Updated Q3 2024',
      slides: [
        {
          topic: 'Global Tax • Slide 1 of 5',
          title: 'OECD Pillar Two & The 15% Global Minimum Tax',
          bullets: [
            'Global Anti-Base Erosion (GloBE) rules applying to MNE groups with revenue > €750 Million.',
            'Top-up tax calculation mechanics: Qualified Domestic Minimum Top-Up Tax (QDMTT).',
            'Impact on Indian outbound corporate groups operating subsidiaries in low-tax jurisdictions.'
          ],
          cards: [
            { title: 'Pillar Two Scope', desc: 'Applies to consolidated MNE groups above €750M.' },
            { title: '15% Floor', desc: 'Minimum effective tax rate across each operating country.' },
            { title: 'QDMTT Priority', desc: 'Indian parent must account for foreign subsidiary shortfalls.' }
          ],
          slideNum: '01 / 05'
        },
        {
          topic: 'Arm’s Length • Slide 2 of 5',
          title: 'Indian Transfer Pricing Benchmarking Realities',
          bullets: [
            'Indian Transfer Pricing Officers (TPOs) routinely discard taxpayer comparables using strict quantitative filters.',
            'Mandatory application of multi-year weighted average margins and range concepts (35th to 65th percentile).',
            'Working capital and risk adjustments to counter abnormal market distortions.'
          ],
          cards: [
            { title: 'Range Concept', desc: 'Requires at least 6 qualifying comparables for arm’s length range.' },
            { title: 'TPO Filters', desc: 'Rejection of persistent loss-makers and super-profit entities.' },
            { title: 'Foreign Comparables', desc: 'Permissible only where Indian domestic database is depleted.' }
          ],
          slideNum: '02 / 05'
        },
        {
          topic: 'Management Fees • Slide 3 of 5',
          title: 'Intra-Group Charges & The Benefit Test',
          bullets: [
            'Total disallowance of management support service fees is the #1 recurring Indian TP dispute.',
            'Taxpayer must establish: Service was actually rendered, duplicated services did not exist, and genuine benefit accrued.',
            'Indirect allocation keys must reflect real cost drivers (headcount, square footage, server time).'
          ],
          cards: [
            { title: 'Evidence Log', desc: 'Produce timesheets, deliverables, presentations, and tickets.' },
            { title: 'Shareholder Cost', desc: 'Strict exclusion of steward or group reporting activities.' },
            { title: 'Mark-Up Standard', desc: 'Cost-plus 3% to 5% benchmarked under low-value services.' }
          ],
          slideNum: '03 / 05'
        },
        {
          topic: 'Dispute Prevention • Slide 4 of 5',
          title: 'Advance Pricing Agreements (APAs) & MAP Solutions',
          bullets: [
            'Unilateral APAs negotiated directly with the CBDT resolve recurring software and ITES markups.',
            'Bilateral APAs with the USA, UK, Japan, and Singapore eliminate double taxation under Double Tax Treaties.',
            'Mutual Agreement Procedure (MAP) under Article 25 to halt aggressive domestic transfer pricing adjustments.'
          ],
          cards: [
            { title: '9-Year Shield', desc: '5 forward years plus 4 rollback assessment years covered.' },
            { title: 'Negotiated Terms', desc: 'Agreed benchmarking matrices and acceptable margin bands.' },
            { title: 'No Penalty Risk', desc: 'Zero concealment penalty exposure for APA-governed transactions.' }
          ],
          slideNum: '04 / 05'
        },
        {
          topic: 'Compliance • Slide 5 of 5',
          title: 'Master File & CbCR Reporting Roadmaps',
          bullets: [
            'Form 3CEAA (Master File) filing requirements for groups exceeding statutory turnover thresholds.',
            'Country-by-Country Reporting (Form 3CEAD) disclosing global profit, tax paid, and tangible assets.',
            'Coherence check between local TP study (Form 3CEB) and master file group narratives.'
          ],
          cards: [
            { title: 'Form 3CEAA', desc: 'Narrative of global value chain and IP ownership architecture.' },
            { title: 'Form 3CEAD', desc: 'Granular jurisdictional allocation of global profits and taxes.' },
            { title: 'Consistency', desc: 'Inconsistencies instantly trigger high-risk audit flags.' }
          ],
          slideNum: '05 / 05'
        }
      ]
    },
    {
      id: 'pres-ma-deals',
      title: 'M&A Deal Architecture: Slump Sale, Demerger & Sec 56 Defense',
      speaker: 'Malay Kalavadia, Partner',
      badge: 'Corporate Finance Masterdeck',
      duration: '42 Slides • Updated Q3 2024',
      slides: [
        {
          topic: 'Deal Structuring • Slide 1 of 5',
          title: 'M&A Deal Modes: Asset vs. Slump vs. Share Transfer',
          bullets: [
            'Slump Sale under Section 50B transfers an entire business undertaking for a lump sum consideration without itemized asset valuation.',
            'Share Purchase acquisitions inherit historical liabilities, contingent tax demands, and Section 79 loss limitations.',
            'Tax-neutral Demergers under Section 2(19AA) allow tax-free spin-offs of active undertakings into new entities.'
          ],
          cards: [
            { title: 'Slump Sale', desc: 'Capital gains based on Net Worth of undertaking without indexation.' },
            { title: 'Itemized Sale', desc: 'Depreciable assets trigger short-term capital gains under Sec 50.' },
            { title: 'Demerger', desc: 'Zero tax for demerged company, shareholders, and resulting entity.' }
          ],
          slideNum: '01 / 05'
        },
        {
          topic: 'Valuation & Tax • Slide 2 of 5',
          title: 'Rule 11UA Fair Market Value & Section 56(2)(viib)',
          bullets: [
            'Issuance of unlisted shares at a premium above Rule 11UA Fair Market Value triggers taxable income in the issuing company.',
            'Discounted Cash Flow (DCF) valuation reports must be signed by registered Merchant Bankers or Valuers.',
            'Abolition of Angel Tax in Budget 2024 for transactions from FY 2024-25 onwards—handling retrospective open years.'
          ],
          cards: [
            { title: 'DCF Method', desc: 'Substantiating revenue projections with signed contracts and pipelines.' },
            { title: 'Rule 11UAA', desc: 'Prescribed valuation methods for Slump Sale consideration calculation.' },
            { title: 'Safe Harbor Band', desc: '10% variation allowance under Section 56(2)(x) acquisitions.' }
          ],
          slideNum: '02 / 05'
        },
        {
          topic: 'Due Diligence • Slide 3 of 5',
          title: 'Tax Due Diligence & Indemnity Negotiation',
          bullets: [
            'Identifying hidden reassessment liabilities, unasserted transfer pricing gaps, and GST input credit reversals.',
            'Structuring robust Specific Tax Indemnities (STI) backed by bank guarantees or escrow holdbacks.',
            'Section 281 Certificates from Assessing Officers to protect buyer against tax liens on transferred assets.'
          ],
          cards: [
            { title: 'Sec. 281 Notice', desc: 'Mandatory permission to avoid transfer being declared void.' },
            { title: 'Tax Escrow', desc: '10-20% holdback for pending CIT(A) and ITAT disputes.' },
            { title: 'R&W Insurance', desc: 'Transferring unknown pre-closing tax risks to insurers.' }
          ],
          slideNum: '03 / 05'
        },
        {
          topic: 'NCLT Schemes • Slide 4 of 5',
          title: 'NCLT Mergers: Timelines, Approvals & Stamp Duty',
          bullets: [
            'Comprehensive step-plan from Board Approval to Regional Director (RD) and Official Liquidator (OL) filings.',
            'Income Tax Department objections under Section 230(5) and overcoming GAAR (General Anti-Avoidance Rule) challenges.',
            'State-specific stamp duty implications on court-sanctioned schemes of arrangement.'
          ],
          cards: [
            { title: 'Appointed Date', desc: 'The accounting and commercial effective date of merger.' },
            { title: 'GAAR Clearance', desc: 'Demonstrating substantial commercial purpose beyond tax savings.' },
            { title: 'Stamp Duty', desc: 'State High Court precedents on conveyance in scheme orders.' }
          ],
          slideNum: '04 / 05'
        },
        {
          topic: 'Execution • Slide 5 of 5',
          title: 'Post-Closing Integration & PAN/GST Regularization',
          bullets: [
            'Immediate harmonization of vendor master files, PAN/TAN cancellations, and GST registrations.',
            'Filing revised returns under Section 170A for the period between Appointed Date and Effective Date.',
            'Re-titling of patents, trademarks, real estate, and municipal licenses in the merged entity.'
          ],
          cards: [
            { title: 'Sec. 170A Return', desc: 'Statutory revised return to reflect merger scheme numbers.' },
            { title: 'ITC Transfer', desc: 'Filing GST ITC-02 to transfer unutilized credit balances.' },
            { title: 'Bank Re-KYC', desc: 'Immediate novation of corporate banking and borrowing mandates.' }
          ],
          slideNum: '05 / 05'
        }
      ]
    }
  ];

  let VIDEOS_DATA = [
    {
      id: 'video-1',
      youtubeId: '3fumBcKC6RE', // High-quality educational tax masterclass embed
      title: 'Landmark ITAT Rulings & Procedural Defense in Assessment Reopenings',
      speaker: 'Saumya Sheth, Partner',
      badge: 'Tax Controversy Masterclass',
      duration: '42:18 Mins',
      views: '14.8K Views',
      tags: ['ITAT', 'Section 148', 'Assessment Reopening', 'Appellate Defense'],
      desc: 'In this in-depth masterclass, Partner Saumya Sheth breaks down landmark Supreme Court and ITAT rulings governing reassessment proceedings, the mandatory hurdles under Section 148A, and how to preserve jurisdictional objections before the tribunal.'
    },
    {
      id: 'video-2',
      youtubeId: 'bTqVqk7FSmY',
      title: 'Advance Pricing Agreements (APAs): Practical Roadmaps for Multinationals',
      speaker: 'Shalibhadra Shah, Partner',
      badge: 'Transfer Pricing Webinar',
      duration: '35:45 Mins',
      views: '11.2K Views',
      tags: ['Transfer Pricing', 'APA', 'Cross-Border', 'CBDT'],
      desc: 'Partner Shalibhadra Shah explains the practical workflow of entering into Unilateral and Bilateral APAs with the Indian revenue authorities. Learn about rollback advantages, pre-filing consultation meetings, and resolving recurring transfer pricing disputes.'
    },
    {
      id: 'video-3',
      youtubeId: 'kJQP7kiw5Fk',
      title: 'Cross-Border Mergers, Inbound Inversions & Section 56(2)(viib)',
      speaker: 'Malay Kalavadia, Partner',
      badge: 'M&A Deal Architecture',
      duration: '48:30 Mins',
      views: '9.6K Views',
      tags: ['M&A', 'Inbound FDI', 'Angel Tax', 'Corporate Restructuring'],
      desc: 'An executive breakdown of cross-border corporate restructurings, slump sale tax calculations under Section 50B, Rule 11UA fair market value substantiations, and avoiding General Anti-Avoidance Rule (GAAR) traps in NCLT schemes.'
    },
    {
      id: 'video-4',
      youtubeId: 'L_LUpnjgPso',
      title: 'FEMA Non-Resident Indian (NRI) & FDI Regulations Demystified',
      speaker: 'Bhaumik Goda, Managing Partner',
      badge: 'Foreign Exchange Webinar',
      duration: '39:10 Mins',
      views: '18.4K Views',
      tags: ['FEMA', 'RBI Compliance', 'FDI', 'Repatriation'],
      desc: 'Managing Partner Bhaumik Goda walks through Reserve Bank of India (RBI) foreign exchange regulations governing inbound foreign direct investment, overseas direct investment (ODI), NRE/NRO banking, and repatriation of capital.'
    }
  ];

  /* ==========================================================================
     STATE MANAGEMENT
     ========================================================================== */

  let currentBookIndex = 0;
  let currentSpreadIndex = 0;
  let currentSinglePageIndex = 0;
  let isFlipping = false;

  function isMobileFlipbook() {
    return window.innerWidth < 768;
  }

  let currentDeckIndex = 0;
  let currentSlideIndex = 0;
  let isSlideAutoPlaying = false;
  let slideAutoPlayTimer = null;

  let currentVideoIndex = 0;

  /* ==========================================================================
     1. FLIPBOOK 3D READER LOGIC
     ========================================================================== */

  const flipbookModal = document.getElementById('flipbookModal');
  const flipbookStage = document.getElementById('flipbookStage');
  const flipbookBookEl = document.getElementById('flipbookBook');
  const flipbookTitleEl = document.getElementById('flipbookBookTitle');
  const flipbookPageIndicator = document.getElementById('flipbookPageIndicator');
  const flipbookLeftPage = document.getElementById('flipbookLeftPage');
  const flipbookRightPage = document.getElementById('flipbookRightPage');
  const flipbookLeaf = document.getElementById('flipbookLeaf');
  const flipbookLeafFrontContent = document.getElementById('flipbookLeafFrontContent');
  const flipbookLeafBackContent = document.getElementById('flipbookLeafBackContent');
  const flipbookPrevBtn = document.getElementById('flipbookPrevBtn');
  const flipbookNextBtn = document.getElementById('flipbookNextBtn');
  const flipbookSidePrevBtn = document.getElementById('flipbookSidePrevBtn');
  const flipbookSideNextBtn = document.getElementById('flipbookSideNextBtn');
  const flipbookTopPrevBtn = document.getElementById('flipbookTopPrevBtn');
  const flipbookTopNextBtn = document.getElementById('flipbookTopNextBtn');
  const flipbookCloseBtn = document.getElementById('flipbookCloseBtn');
  const flipbookPills = document.getElementById('flipbookPills');
  const flipbookDownloadBtn = document.getElementById('flipbookDownloadBtn');
  const flipbookFullscreenBtn = document.getElementById('flipbookFullscreenBtn');
  const flipbookZoomInBtn = document.getElementById('flipbookZoomInBtn');
  const flipbookZoomOutBtn = document.getElementById('flipbookZoomOutBtn');
  const flipbookTextSizeBtn = document.getElementById('flipbookTextSizeBtn');
  const flipbookViewModeBtn = document.getElementById('flipbookViewModeBtn');
  const flipbookFitWidthBtn = document.getElementById('flipbookFitWidthBtn');

  // Default to 3D Two-Page Spread with realistic page-flip animation
  let flipbookViewMode = 'spread';
  let isFitWidth = false;

  function isSinglePage() {
    return isMobileFlipbook() || flipbookViewMode === 'single';
  }

  function toggleViewMode() {
    flipbookViewMode = (flipbookViewMode === 'spread') ? 'single' : 'spread';
    if (flipbookViewModeBtn) {
      const icon = flipbookViewModeBtn.querySelector('i');
      if (icon) {
        icon.className = (flipbookViewMode === 'spread') ? 'fa-solid fa-file' : 'fa-solid fa-book-open';
      }
      flipbookViewModeBtn.title = (flipbookViewMode === 'spread')
        ? 'Switch to Single Page View'
        : 'Switch to 3D Flip Book Spread';
    }
    renderFlipbookSpread();
    renderFlipbookPills();
  }

  function toggleFitWidth() {
    isFitWidth = !isFitWidth;
    if (flipbookBookEl) {
      flipbookBookEl.classList.toggle('fit-width', isFitWidth);
    }
    if (flipbookFitWidthBtn) {
      flipbookFitWidthBtn.classList.toggle('active', isFitWidth);
      flipbookFitWidthBtn.style.background = isFitWidth ? 'rgba(167, 37, 58, 0.65)' : '';
      flipbookFitWidthBtn.style.borderColor = isFitWidth ? '#A7253A' : '';
    }
  }

  // Zoom & Font Size State for Pristine Online Reading
  let currentZoomLevel = 1.0;
  let currentFontSizeIndex = 0; // 0: standard, 1: large, 2: extra-large
  const FONT_SIZE_CLASSES = ['', 'font-size-large', 'font-size-xl'];

  let zoomBadgeTimeout = null;
  function showZoomBadge(text) {
    let badge = document.getElementById('flipbookZoomBadge');
    if (!badge && flipbookStage) {
      badge = document.createElement('div');
      badge.id = 'flipbookZoomBadge';
      badge.style.cssText = 'position:absolute;top:18px;left:50%;transform:translateX(-50%);background:rgba(15,23,42,0.92);color:#FFFFFF;padding:6px 16px;border-radius:24px;font-size:0.82rem;font-weight:700;z-index:90;letter-spacing:0.04em;border:1px solid rgba(255,255,255,0.25);box-shadow:0 8px 24px rgba(0,0,0,0.5);backdrop-filter:blur(8px);pointer-events:none;transition:opacity 0.25s ease;';
      flipbookStage.appendChild(badge);
    }
    if (badge) {
      badge.textContent = text;
      badge.style.opacity = '1';
      clearTimeout(zoomBadgeTimeout);
      zoomBadgeTimeout = setTimeout(() => {
        if (badge) badge.style.opacity = '0';
      }, 1300);
    }
  }

  function updateZoom() {
    if (!flipbookBookEl || !flipbookStage) return;
    if (currentZoomLevel <= 1.0) {
      currentZoomLevel = 1.0;
      flipbookBookEl.style.transform = '';
      flipbookBookEl.style.transformOrigin = '';
      flipbookStage.classList.remove('is-zoomed');
      flipbookStage.style.overflow = '';
    } else {
      flipbookBookEl.style.transformOrigin = 'top center';
      flipbookBookEl.style.transform = `scale(${currentZoomLevel})`;
      flipbookStage.classList.add('is-zoomed');
      flipbookStage.style.overflow = 'auto';
    }
  }

  function zoomIn() {
    if (currentZoomLevel < 3.0) {
      currentZoomLevel = Math.round((currentZoomLevel + 0.25) * 100) / 100;
      updateZoom();
      showZoomBadge(`Zoom: ${Math.round(currentZoomLevel * 100)}%`);
    }
  }

  function zoomOut() {
    if (currentZoomLevel > 0.75) {
      currentZoomLevel = Math.round((currentZoomLevel - 0.25) * 100) / 100;
      updateZoom();
      showZoomBadge(`Zoom: ${Math.round(currentZoomLevel * 100)}%`);
    }
  }

  function toggleTextSize() {
    if (!flipbookBookEl) return;
    FONT_SIZE_CLASSES.forEach(cls => { if (cls) flipbookBookEl.classList.remove(cls); });
    currentFontSizeIndex = (currentFontSizeIndex + 1) % FONT_SIZE_CLASSES.length;
    const nextClass = FONT_SIZE_CLASSES[currentFontSizeIndex];
    if (nextClass) flipbookBookEl.classList.add(nextClass);

    // Dynamic Zoom Cycling for PDF documents & mobile readability (100% -> 140% -> 180% -> 100%)
    const PDF_ZOOMS = [1.0, 1.4, 1.8];
    currentZoomLevel = PDF_ZOOMS[currentFontSizeIndex % PDF_ZOOMS.length];
    updateZoom();
    showZoomBadge(`Scale: ${Math.round(currentZoomLevel * 100)}%`);
  }

  function resetZoomAndFont() {
    currentZoomLevel = 1.0;
    currentFontSizeIndex = 0;
    isFitWidth = false;
    if (flipbookBookEl) {
      flipbookBookEl.style.transform = '';
      flipbookBookEl.style.transformOrigin = '';
      flipbookBookEl.classList.remove('fit-width');
      FONT_SIZE_CLASSES.forEach(cls => { if (cls) flipbookBookEl.classList.remove(cls); });
    }
    if (flipbookFitWidthBtn) {
      flipbookFitWidthBtn.classList.remove('active');
      flipbookFitWidthBtn.style.background = '';
      flipbookFitWidthBtn.style.borderColor = '';
    }
    if (flipbookStage) {
      flipbookStage.classList.remove('is-zoomed');
      flipbookStage.style.overflow = '';
    }
  }

  /**
   * Synthesize an ultra-realistic paper page turn swoosh sound using Web Audio API
   */
  function playPageTurnSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const bufferSize = Math.floor(ctx.sampleRate * 0.22);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1100, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.22);
      filter.Q.value = 1.9;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  /* ── Ultra-Fast Instant Progressive PDF Renderer ── */
  const pdfDocCache = new Map();
  const pageRenderCache = new Map();

  async function getPdfDoc(pdfUrlOrData) {
    if (!pdfUrlOrData) return null;
    if (pdfDocCache.has(pdfUrlOrData)) {
      return pdfDocCache.get(pdfUrlOrData);
    }

    const task = (async () => {
      if (!window.pdfjsLib) {
        console.warn('PDF.js library is not loaded');
        return null;
      }
      try {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      } catch(e) {}

      let loadingTask;
      if (typeof pdfUrlOrData === 'string' && pdfUrlOrData.startsWith('data:')) {
        const base64Index = pdfUrlOrData.indexOf(';base64,');
        if (base64Index !== -1) {
          const rawBase64 = pdfUrlOrData.substring(base64Index + 8);
          const binaryString = atob(rawBase64);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          loadingTask = pdfjsLib.getDocument({ data: bytes, disableAutoFetch: false });
        } else {
          loadingTask = pdfjsLib.getDocument(pdfUrlOrData);
        }
      } else {
        loadingTask = pdfjsLib.getDocument(pdfUrlOrData);
      }

      const doc = await loadingTask.promise;
      doc._bgssUrl = pdfUrlOrData; // Unique per-book identifier for cache key
      return doc;
    })();

    pdfDocCache.set(pdfUrlOrData, task);
    return task;
  }

  function assignPageImg(owner, pageNum, dataUrl) {
    if (!owner || !pageNum || !dataUrl) return;
    if (owner.pages && Array.isArray(owner.pages)) {
      for (const spread of owner.pages) {
        if (spread.left && spread.left.pageNum === pageNum) {
          spread.left.imgSrc = dataUrl;
        }
        if (spread.right && spread.right.pageNum === pageNum) {
          spread.right.imgSrc = dataUrl;
        }
      }
    }
    if (owner.slides && Array.isArray(owner.slides)) {
      const slide = owner.slides.find(s => s.pageNum === pageNum);
      if (slide) slide.imgSrc = dataUrl;
    }
  }

  function updatePageImgInDom(pageNum, dataUrl) {
    const wraps = document.querySelectorAll(`.flipbook-pdf-canvas-wrap[data-pdf-page="${pageNum}"]`);
    wraps.forEach(wrap => {
      let img = wrap.querySelector('.flipbook-pdf-img');
      if (!img) {
        img = document.createElement('img');
        img.className = 'flipbook-pdf-img';
        img.alt = `Page ${pageNum}`;
        const skel = wrap.querySelector('.flipbook-page-skeleton');
        if (skel) skel.remove();
        wrap.insertBefore(img, wrap.firstChild);
      }
      img.src = dataUrl;
    });
  }

  async function renderPdfPage(pdfDoc, pageNum, owner = null) {
    if (!pdfDoc || !pageNum) return null;
    const docKey = pdfDoc._bgssUrl || (pdfDoc.fingerprints ? pdfDoc.fingerprints[0] : null) || pdfDoc.fingerprint || 'pdf';
    const cacheKey = `${docKey}_p${pageNum}`;

    if (pageRenderCache.has(cacheKey)) {
      const cached = pageRenderCache.get(cacheKey);
      if (owner) assignPageImg(owner, pageNum, cached);
      return cached;
    }

    try {
      const page = await pdfDoc.getPage(pageNum);
      const unscaledViewport = page.getViewport({ scale: 1 });
      // Render at ultra-crisp Retina / 300 DPI resolution so text & fonts are razor-sharp
      const dpr = Math.max(window.devicePixelRatio || 1, 2);
      const targetWidth = Math.max(2200, Math.min(3200, Math.round(unscaledViewport.width * dpr * 1.5)));
      const scale = Math.max(2.6, Math.min(4.2, targetWidth / unscaledViewport.width));
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      const ctx = canvas.getContext('2d', { alpha: false });
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      await page.render({ 
        canvasContext: ctx, 
        viewport,
        intent: 'display'
      }).promise;

      // Prefer WebP 0.96 for pristine text edges without JPEG ringing; fallback to high-quality JPEG 0.95
      let dataUrl = '';
      try {
        dataUrl = canvas.toDataURL('image/webp', 0.96);
      } catch (e) {}
      if (!dataUrl || !dataUrl.startsWith('data:image/webp')) {
        dataUrl = canvas.toDataURL('image/jpeg', 0.95);
      }

      pageRenderCache.set(cacheKey, dataUrl);

      if (owner) assignPageImg(owner, pageNum, dataUrl);
      return dataUrl;
    } catch (err) {
      console.warn(`Error rendering page ${pageNum}:`, err);
      return null;
    }
  }

  function prefetchPdfPages(pdfDoc, pageNums, owner = null) {
    if (!pdfDoc || !Array.isArray(pageNums)) return;
    const maxPage = pdfDoc.numPages || 1;
    pageNums.forEach(pn => {
      if (pn >= 1 && pn <= maxPage) {
        const docKey = pdfDoc._bgssUrl || (pdfDoc.fingerprints ? pdfDoc.fingerprints[0] : null) || pdfDoc.fingerprint || 'pdf';
        const cacheKey = `${docKey}_p${pn}`;
        if (!pageRenderCache.has(cacheKey)) {
          setTimeout(() => {
            renderPdfPage(pdfDoc, pn, owner).catch(() => {});
          }, 40);
        }
      }
    });
  }

  async function openFlipbook(bookId) {
    resetZoomAndFont();
    pageRenderCache.clear(); // Prevent cross-book page cache collisions
    const foundIndex = EBOOKS_DATA.findIndex(b => b.id === bookId);
    currentBookIndex = foundIndex >= 0 ? foundIndex : 0;
    currentSpreadIndex = 0;
    currentSinglePageIndex = 0;

    const book = EBOOKS_DATA[currentBookIndex];
    if (!book) return;

    const loadingEl = document.getElementById('flipbookLoading');
    if (flipbookModal) {
      flipbookModal.classList.add('open');
      flipbookModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('flipbook-open');
    }

    // Check if this book has a PDF file attached (uploaded from device or PDF URL)
    const isPdf = !!(book.pdfUrl || (book.downloadUrl && book.downloadUrl.toLowerCase().endsWith('.pdf')) || (book.url && book.url.toLowerCase().endsWith('.pdf')) || (book.url && book.url.startsWith('data:application/pdf')));

    if (isPdf && !book.isInitializedPdf) {
      if (loadingEl) {
        loadingEl.style.display = 'flex';
        const msg = document.getElementById('flipbookLoadingMsg');
        if (msg) msg.textContent = 'Opening Book…';
      }

      try {
        const pdfTarget = book.pdfUrl || book.url || book.downloadUrl;
        const pdfDoc = await getPdfDoc(pdfTarget);

        if (pdfDoc && pdfDoc.numPages) {
          const num = pdfDoc.numPages;
          const spreads = [];
          for (let i = 0; i < num; i += 2) {
            spreads.push({
              left: { isPdfPage: true, pageNum: i + 1, imgSrc: null, pdfDoc },
              right: (i + 1 < num)
                ? { isPdfPage: true, pageNum: i + 2, imgSrc: null, pdfDoc }
                : { isPdfPage: false, header: 'BGSS & Associates', body: '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#94a3b8;font-style:italic;">End of Publication Document</div>', footer: 'bgssassociates.com' }
            });
          }
          book.pages = spreads;
          book.pagesCount = num;
          book.pdfPagesCount = num;
          book.pdfDoc = pdfDoc;
          book.isInitializedPdf = true;

          // Instant launch: Render ONLY spread 1 (pages 1 & 2) before showing book!
          await Promise.all([
            renderPdfPage(pdfDoc, 1, book),
            num > 1 ? renderPdfPage(pdfDoc, 2, book) : Promise.resolve()
          ]);
        }
      } catch (err) {
        console.warn('PDF.js fast loader failed, falling back:', err);
      } finally {
        if (loadingEl) loadingEl.style.display = 'none';
      }
    } else {
      if (loadingEl) loadingEl.style.display = 'none';
    }

    renderFlipbookSpread();
    renderFlipbookPills();

    // Auto-enable single-page + fit-width mode for ALL PDF books (desktop AND mobile)
    // This ensures A4 portrait pages are large enough to read on all screens
    if (book.isInitializedPdf) {
      flipbookViewMode = 'single';
      if (!isFitWidth) {
        isFitWidth = true;
        if (flipbookBookEl) {
          flipbookBookEl.classList.add('fit-width');
        }
        if (flipbookFitWidthBtn) {
          flipbookFitWidthBtn.classList.add('active');
          flipbookFitWidthBtn.style.background = 'rgba(167, 37, 58, 0.65)';
          flipbookFitWidthBtn.style.borderColor = '#A7253A';
        }
      }
    }

    // Silently prefetch the next spread (pages 3 & 4) in background for instant flipping
    if (book.pdfDoc) {
      prefetchPdfPages(book.pdfDoc, [3, 4], book);
    }
  }

  function closeFlipbook() {
    resetZoomAndFont();
    if (flipbookModal) {
      flipbookModal.classList.remove('open');
      flipbookModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      document.body.classList.remove('flipbook-open');
      if (flipbookLeaf) {
        flipbookLeaf.className = 'flipbook-leaf';
      }
    }
  }

  function buildPageHTML(pageData, isLeft, pageNum, totalPages) {
    if (!pageData) {
      return `<div class="flipbook-pdf-canvas-wrap" style="background:#fff;"></div>`;
    }

    const prevDisabled = pageNum <= 1 ? 'disabled style="opacity:0.3;pointer-events:none;"' : '';
    const nextDisabled = pageNum >= totalPages ? 'disabled style="opacity:0.3;pointer-events:none;"' : '';

    const turnBarHTML = `
      <div class="flipbook-page-turn-bar">
        <button type="button" class="flipbook-page-action-btn js-turn-prev" aria-label="Turn to previous page" ${prevDisabled}>
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i> Prev Page
        </button>
        <span class="flipbook-page-turn-badge">Page ${pageNum} of ${totalPages}</span>
        <button type="button" class="flipbook-page-action-btn js-turn-next" aria-label="Turn to next page" ${nextDisabled}>
          Next Page <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    `;

    if (pageData.isPdfPage) {
      const imgHTML = pageData.imgSrc
        ? `<img src="${pageData.imgSrc}" alt="Page ${pageNum}" class="flipbook-pdf-img">`
        : `<div class="flipbook-page-skeleton">
            <i class="fa-solid fa-circle-notch fa-spin" style="font-size:1.6rem;color:#A7253A;"></i>
            <span style="font-size:11px;color:#64748B;font-weight:600;">Loading page ${pageNum}…</span>
          </div>`;

      return `
        <div class="flipbook-pdf-canvas-wrap" data-pdf-page="${pageNum}">
          ${imgHTML}
          <div class="flipbook-pdf-page-num" style="position:absolute;bottom:8px;${isLeft ? 'left:12px;' : 'right:12px;'}background:rgba(15,23,42,0.65);color:#fff;font-size:11px;padding:2px 8px;border-radius:4px;font-weight:600;letter-spacing:0.04em;">Page ${pageNum}</div>
        </div>
        ${turnBarHTML}
        ${isLeft ? '<div class="flipbook-corner-hint-left js-corner-prev" title="Click to flip to previous page"></div>' : '<div class="flipbook-corner-hint js-corner-next" title="Click to flip to next page"></div>'}
      `;
    }
    return `
      <div class="flipbook-header">
        <span>${pageData.header || 'BGSS Technical Series'}</span>
        <span>${isLeft ? 'BGSS &amp; Associates' : 'Knowledge Series'}</span>
      </div>
      <div class="flipbook-content-body">
        ${pageData.body || ''}
      </div>
      ${turnBarHTML}
      <div class="flipbook-footer">
        <span>${pageData.footer || 'BGSS Practice Insights'}</span>
        <span>${isLeft ? 'Page ' + pageNum + ' of ' + totalPages : 'bgssassociates.com'}</span>
      </div>
      ${isLeft ? '<div class="flipbook-corner-hint-left js-corner-prev" title="Click to flip to previous page"></div>' : '<div class="flipbook-corner-hint js-corner-next" title="Click to flip to next page"></div>'}
    `;
  }

  function renderFlipbookSpread() {
    const book = EBOOKS_DATA[currentBookIndex];
    if (!book || !book.pages || !book.pages.length) return;

    const totalPages = book.pages.length * 2;

    if (flipbookTitleEl) {
      flipbookTitleEl.textContent = book.title;
    }

    if (isSinglePage()) {
      // ── Single Page High-Legibility Mode (Mobile & Desktop) ──
      if (flipbookBookEl) {
        flipbookBookEl.classList.add('single-page-mode');
      }

      const p = currentSinglePageIndex;
      const s = Math.floor(p / 2);
      const isLeft = (p % 2 === 0);
      const spread = book.pages[s];
      const pageData = spread ? (isLeft ? spread.left : spread.right) : null;
      const pageNum = p + 1;

      if (flipbookPageIndicator) {
        flipbookPageIndicator.textContent = `Page ${pageNum} of ${totalPages}`;
      }

      if (flipbookLeftPage) {
        flipbookLeftPage.style.display = 'none';
      }

      if (flipbookRightPage) {
        flipbookRightPage.style.display = 'block';
        flipbookRightPage.classList.toggle('has-pdf', !!(pageData && pageData.isPdfPage));
        flipbookRightPage.innerHTML = buildPageHTML(pageData, false, pageNum, totalPages);
        flipbookRightPage.scrollTop = 0;
        if (pageData && pageData.isPdfPage && !pageData.imgSrc && pageData.pdfDoc) {
          renderPdfPage(pageData.pdfDoc, pageNum, book).then(url => {
            if (url) updatePageImgInDom(pageNum, url);
          });
        }
      }

      const canPrevSingle = currentSinglePageIndex > 0;
      const canNextSingle = currentSinglePageIndex < totalPages - 1;
      updateNavButtonsState(canPrevSingle, canNextSingle, 'Previous Page', 'Next Page');

      updateFlipbookPillState();
      rebindCornerHints();

      if (book.pdfDoc) {
        prefetchPdfPages(book.pdfDoc, [pageNum + 1, pageNum + 2], book);
      }
    } else {
      // ── Desktop Two-Page Spread Mode ──
      if (flipbookBookEl) {
        flipbookBookEl.classList.remove('single-page-mode');
      }

      if (flipbookLeftPage) {
        flipbookLeftPage.style.display = '';
      }
      if (flipbookRightPage) {
        flipbookRightPage.style.display = '';
      }

      const spread = book.pages[currentSpreadIndex];
      if (!spread) return;

      const pageNumL = currentSpreadIndex * 2 + 1;
      const pageNumR = currentSpreadIndex * 2 + 2;

      if (flipbookPageIndicator) {
        flipbookPageIndicator.textContent = `Pages ${pageNumL}–${pageNumR} of ${totalPages}`;
      }

      // Populate Left Page
      if (flipbookLeftPage) {
        flipbookLeftPage.classList.toggle('has-pdf', !!(spread.left && spread.left.isPdfPage));
        flipbookLeftPage.innerHTML = buildPageHTML(spread.left, true, pageNumL, totalPages);
        flipbookLeftPage.scrollTop = 0;
        if (spread.left && spread.left.isPdfPage && !spread.left.imgSrc && spread.left.pdfDoc) {
          renderPdfPage(spread.left.pdfDoc, pageNumL, book).then(url => {
            if (url) updatePageImgInDom(pageNumL, url);
          });
        }
      }

      // Populate Right Page
      if (flipbookRightPage) {
        flipbookRightPage.classList.toggle('has-pdf', !!(spread.right && spread.right.isPdfPage));
        flipbookRightPage.innerHTML = buildPageHTML(spread.right, false, pageNumR, totalPages);
        flipbookRightPage.scrollTop = 0;
        if (spread.right && spread.right.isPdfPage && !spread.right.imgSrc && spread.right.pdfDoc) {
          renderPdfPage(spread.right.pdfDoc, pageNumR, book).then(url => {
            if (url) updatePageImgInDom(pageNumR, url);
          });
        }
      }

      // Update Nav Buttons
      const canPrevSpread = currentSpreadIndex > 0;
      const canNextSpread = currentSpreadIndex < book.pages.length - 1;
      updateNavButtonsState(canPrevSpread, canNextSpread, 'Previous Spread', 'Next Spread');

      updateFlipbookPillState();
      rebindCornerHints();

      // Silently prefetch adjacent pages in background
      if (book.pdfDoc) {
        prefetchPdfPages(book.pdfDoc, [pageNumR + 1, pageNumR + 2, pageNumL - 1, pageNumL - 2], book);
      }
    }
  }

  function updateNavButtonsState(canPrev, canNext, prevLabel, nextLabel) {
    if (flipbookPrevBtn) {
      flipbookPrevBtn.disabled = !canPrev;
      flipbookPrevBtn.innerHTML = `<i class="fa-solid fa-chevron-left" aria-hidden="true"></i> ${isMobileFlipbook() ? 'Prev' : prevLabel}`;
    }
    if (flipbookNextBtn) {
      flipbookNextBtn.disabled = !canNext;
      flipbookNextBtn.innerHTML = `${isMobileFlipbook() ? 'Next' : nextLabel} <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>`;
    }
    if (flipbookSidePrevBtn) {
      flipbookSidePrevBtn.disabled = !canPrev;
      flipbookSidePrevBtn.style.opacity = canPrev ? '1' : '0.22';
      flipbookSidePrevBtn.style.pointerEvents = canPrev ? 'auto' : 'none';
    }
    if (flipbookSideNextBtn) {
      flipbookSideNextBtn.disabled = !canNext;
      flipbookSideNextBtn.style.opacity = canNext ? '1' : '0.22';
      flipbookSideNextBtn.style.pointerEvents = canNext ? 'auto' : 'none';
    }
    if (flipbookTopPrevBtn) {
      flipbookTopPrevBtn.disabled = !canPrev;
      flipbookTopPrevBtn.style.opacity = canPrev ? '1' : '0.25';
      flipbookTopPrevBtn.style.pointerEvents = canPrev ? 'auto' : 'none';
    }
    if (flipbookTopNextBtn) {
      flipbookTopNextBtn.disabled = !canNext;
      flipbookTopNextBtn.style.opacity = canNext ? '1' : '0.25';
      flipbookTopNextBtn.style.pointerEvents = canNext ? 'auto' : 'none';
    }
  }

  function rebindCornerHints() {
    document.querySelectorAll('.js-corner-next, .js-turn-next').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        flipNext();
      });
    });
    document.querySelectorAll('.js-corner-prev, .js-turn-prev').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        flipPrev();
      });
    });
  }

  function renderFlipbookPills() {
    if (!flipbookPills) return;
    const book = EBOOKS_DATA[currentBookIndex];
    if (!book || !book.pages) return;
    flipbookPills.innerHTML = '';

    if (isSinglePage()) {
      const totalPages = book.pages.length * 2;
      const maxPills = Math.min(totalPages, 12);
      for (let idx = 0; idx < maxPills; idx++) {
        const pill = document.createElement('div');
        pill.className = `flipbook-pill-dot ${idx === currentSinglePageIndex ? 'active' : ''}`;
        pill.setAttribute('role', 'button');
        pill.setAttribute('aria-label', `Go to page ${idx + 1}`);
        pill.addEventListener('click', () => {
          if (isFlipping || idx === currentSinglePageIndex) return;
          currentSinglePageIndex = idx;
          currentSpreadIndex = Math.floor(idx / 2);
          playPageTurnSound();
          renderFlipbookSpread();
        });
        flipbookPills.appendChild(pill);
      }
    } else {
      book.pages.forEach((_, idx) => {
        const pill = document.createElement('div');
        pill.className = `flipbook-pill-dot ${idx === currentSpreadIndex ? 'active' : ''}`;
        pill.setAttribute('role', 'button');
        pill.setAttribute('aria-label', `Go to spread ${idx + 1}`);
        pill.addEventListener('click', () => {
          if (isFlipping || idx === currentSpreadIndex) return;
          if (idx > currentSpreadIndex) {
            flipNext();
          } else {
            flipPrev();
          }
        });
        flipbookPills.appendChild(pill);
      });
    }
  }

  function updateFlipbookPillState() {
    if (!flipbookPills) return;
    const dots = flipbookPills.querySelectorAll('.flipbook-pill-dot');
    if (isSinglePage()) {
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSinglePageIndex);
      });
    } else {
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSpreadIndex);
      });
    }
  }

  /**
   * Ultra-Realistic 3D Forward Page Turn Animation
   */
  function flipNext() {
    const book = EBOOKS_DATA[currentBookIndex];
    if (!book || !book.pages || isFlipping) return;

    const totalPages = book.pages.length * 2;

    if (isSinglePage()) {
      if (currentSinglePageIndex >= totalPages - 1) return;
      isFlipping = true;
      playPageTurnSound();

      const curP = currentSinglePageIndex;
      const nextP = curP + 1;
      const curPageNum = curP + 1;
      const nextPageNum = nextP + 1;

      const curSpread = book.pages[Math.floor(curP / 2)];
      const curPageData = (curP % 2 === 0) ? (curSpread ? curSpread.left : null) : (curSpread ? curSpread.right : null);

      const nextSpread = book.pages[Math.floor(nextP / 2)];
      const nextPageData = (nextP % 2 === 0) ? (nextSpread ? nextSpread.left : null) : (nextSpread ? nextSpread.right : null);

      // On-demand PDF render if needed
      if (nextPageData && nextPageData.isPdfPage && !nextPageData.imgSrc && nextPageData.pdfDoc) {
        renderPdfPage(nextPageData.pdfDoc, nextPageNum, book).then(url => {
          if (url) updatePageImgInDom(nextPageNum, url);
        });
      }

      // 1. Populate turning leaf front with current page and back with next page
      if (flipbookLeafFrontContent) {
        flipbookLeafFrontContent.parentElement.classList.toggle('has-pdf', !!(curPageData && curPageData.isPdfPage));
        flipbookLeafFrontContent.innerHTML = buildPageHTML(curPageData, false, curPageNum, totalPages);
      }
      if (flipbookLeafBackContent) {
        flipbookLeafBackContent.parentElement.classList.toggle('has-pdf', !!(nextPageData && nextPageData.isPdfPage));
        flipbookLeafBackContent.innerHTML = buildPageHTML(nextPageData, false, nextPageNum, totalPages);
      }

      // 2. Immediately reveal the upcoming next page underneath the leaf
      if (flipbookRightPage) {
        flipbookRightPage.classList.toggle('has-pdf', !!(nextPageData && nextPageData.isPdfPage));
        flipbookRightPage.innerHTML = buildPageHTML(nextPageData, false, nextPageNum, totalPages);
        flipbookRightPage.scrollTop = 0;
      }

      // 3. Trigger 3D single-page leaf turn animation
      if (flipbookLeaf) {
        flipbookLeaf.className = 'flipbook-leaf is-flipping flip-forward single-page-leaf';
      }

      // 4. Complete transition
      setTimeout(() => {
        currentSinglePageIndex = nextP;
        currentSpreadIndex = Math.floor(currentSinglePageIndex / 2);

        if (flipbookLeaf) {
          flipbookLeaf.className = 'flipbook-leaf';
        }

        if (flipbookPageIndicator) {
          flipbookPageIndicator.textContent = `Page ${nextPageNum} of ${totalPages}`;
        }

        if (flipbookPrevBtn) {
          flipbookPrevBtn.disabled = currentSinglePageIndex <= 0;
          flipbookPrevBtn.innerHTML = `<i class="fa-solid fa-chevron-left" aria-hidden="true"></i> ${isMobileFlipbook() ? 'Prev' : 'Previous Page'}`;
        }
        if (flipbookNextBtn) {
          flipbookNextBtn.disabled = currentSinglePageIndex >= totalPages - 1;
          flipbookNextBtn.innerHTML = `${isMobileFlipbook() ? 'Next' : 'Next Page'} <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>`;
        }

        updateFlipbookPillState();
        rebindCornerHints();
        isFlipping = false;

        // Prefetch upcoming pages in background
        if (book.pdfDoc) {
          prefetchPdfPages(book.pdfDoc, [nextPageNum + 1, nextPageNum + 2], book);
        }
      }, 720);
      return;
    }

    if (currentSpreadIndex >= book.pages.length - 1) return;

    isFlipping = true;
    playPageTurnSound();

    const curSpread = book.pages[currentSpreadIndex];
    const nextSpread = book.pages[currentSpreadIndex + 1];
    const curPageR = currentSpreadIndex * 2 + 2;
    const nextPageL = (currentSpreadIndex + 1) * 2 + 1;
    const nextPageR = (currentSpreadIndex + 1) * 2 + 2;

    // Trigger on-demand renders if not already cached
    if (nextSpread.left && nextSpread.left.isPdfPage && !nextSpread.left.imgSrc && nextSpread.left.pdfDoc) {
      renderPdfPage(nextSpread.left.pdfDoc, nextPageL, book).then(url => {
        if (url) updatePageImgInDom(nextPageL, url);
      });
    }
    if (nextSpread.right && nextSpread.right.isPdfPage && !nextSpread.right.imgSrc && nextSpread.right.pdfDoc) {
      renderPdfPage(nextSpread.right.pdfDoc, nextPageR, book).then(url => {
        if (url) updatePageImgInDom(nextPageR, url);
      });
    }

    // 1. Populate turning leaf front with current right page content
    if (flipbookLeafFrontContent) {
      flipbookLeafFrontContent.parentElement.classList.toggle('has-pdf', !!(curSpread.right && curSpread.right.isPdfPage));
      flipbookLeafFrontContent.innerHTML = buildPageHTML(curSpread.right, false, curPageR, totalPages);
    }

    // 2. Populate turning leaf back with next left page content
    if (flipbookLeafBackContent) {
      flipbookLeafBackContent.parentElement.classList.toggle('has-pdf', !!(nextSpread.left && nextSpread.left.isPdfPage));
      flipbookLeafBackContent.innerHTML = buildPageHTML(nextSpread.left, true, nextPageL, totalPages);
    }

    // 3. Immediately reveal the underlying next right page
    if (flipbookRightPage) {
      flipbookRightPage.classList.toggle('has-pdf', !!(nextSpread.right && nextSpread.right.isPdfPage));
      flipbookRightPage.innerHTML = buildPageHTML(nextSpread.right, false, nextPageR, totalPages);
    }

    // 4. Trigger 3D flip animation
    if (flipbookLeaf) {
      flipbookLeaf.className = 'flipbook-leaf is-flipping flip-forward';
    }

    // 5. Complete transition
    setTimeout(() => {
      currentSpreadIndex++;
      currentSinglePageIndex = currentSpreadIndex * 2;

      // Land new left page
      if (flipbookLeftPage) {
        flipbookLeftPage.classList.toggle('has-pdf', !!(nextSpread.left && nextSpread.left.isPdfPage));
        flipbookLeftPage.innerHTML = buildPageHTML(nextSpread.left, true, nextPageL, totalPages);
      }

      // Reset leaf
      if (flipbookLeaf) {
        flipbookLeaf.className = 'flipbook-leaf';
      }

      if (flipbookPageIndicator) {
        flipbookPageIndicator.textContent = `Pages ${nextPageL}–${nextPageR} of ${totalPages}`;
      }

      if (flipbookPrevBtn) flipbookPrevBtn.disabled = currentSpreadIndex === 0;
      if (flipbookNextBtn) flipbookNextBtn.disabled = currentSpreadIndex >= book.pages.length - 1;

      updateFlipbookPillState();
      rebindCornerHints();
      isFlipping = false;

      // Prefetch upcoming spread in background
      if (book.pdfDoc) {
        prefetchPdfPages(book.pdfDoc, [nextPageR + 1, nextPageR + 2], book);
      }
    }, 780);
  }

  /**
   * Ultra-Realistic 3D Backward Page Turn Animation
   */
  function flipPrev() {
    const book = EBOOKS_DATA[currentBookIndex];
    if (!book || !book.pages || isFlipping) return;

    const totalPages = book.pages.length * 2;

    if (isSinglePage()) {
      if (currentSinglePageIndex <= 0) return;
      isFlipping = true;
      playPageTurnSound();

      const curP = currentSinglePageIndex;
      const prevP = curP - 1;
      const curPageNum = curP + 1;
      const prevPageNum = prevP + 1;

      const curSpread = book.pages[Math.floor(curP / 2)];
      const curPageData = (curP % 2 === 0) ? (curSpread ? curSpread.left : null) : (curSpread ? curSpread.right : null);

      const prevSpread = book.pages[Math.floor(prevP / 2)];
      const prevPageData = (prevP % 2 === 0) ? (prevSpread ? prevSpread.left : null) : (prevSpread ? prevSpread.right : null);

      // On-demand PDF render if needed
      if (prevPageData && prevPageData.isPdfPage && !prevPageData.imgSrc && prevPageData.pdfDoc) {
        renderPdfPage(prevPageData.pdfDoc, prevPageNum, book).then(url => {
          if (url) updatePageImgInDom(prevPageNum, url);
        });
      }

      // 1. Populate turning leaf front with previous page and back with current page
      if (flipbookLeafFrontContent) {
        flipbookLeafFrontContent.parentElement.classList.toggle('has-pdf', !!(prevPageData && prevPageData.isPdfPage));
        flipbookLeafFrontContent.innerHTML = buildPageHTML(prevPageData, false, prevPageNum, totalPages);
      }
      if (flipbookLeafBackContent) {
        flipbookLeafBackContent.parentElement.classList.toggle('has-pdf', !!(curPageData && curPageData.isPdfPage));
        flipbookLeafBackContent.innerHTML = buildPageHTML(curPageData, false, curPageNum, totalPages);
      }

      // 2. Immediately reveal the previous page underneath
      if (flipbookRightPage) {
        flipbookRightPage.classList.toggle('has-pdf', !!(prevPageData && prevPageData.isPdfPage));
        flipbookRightPage.innerHTML = buildPageHTML(prevPageData, false, prevPageNum, totalPages);
        flipbookRightPage.scrollTop = 0;
      }

      // 3. Trigger 3D single-page leaf turn animation
      if (flipbookLeaf) {
        flipbookLeaf.className = 'flipbook-leaf is-flipping flip-backward single-page-leaf';
      }

      // 4. Complete transition
      setTimeout(() => {
        currentSinglePageIndex = prevP;
        currentSpreadIndex = Math.floor(currentSinglePageIndex / 2);

        if (flipbookLeaf) {
          flipbookLeaf.className = 'flipbook-leaf';
        }

        if (flipbookPageIndicator) {
          flipbookPageIndicator.textContent = `Page ${prevPageNum} of ${totalPages}`;
        }

        if (flipbookPrevBtn) {
          flipbookPrevBtn.disabled = currentSinglePageIndex <= 0;
          flipbookPrevBtn.innerHTML = `<i class="fa-solid fa-chevron-left" aria-hidden="true"></i> ${isMobileFlipbook() ? 'Prev' : 'Previous Page'}`;
        }
        if (flipbookNextBtn) {
          flipbookNextBtn.disabled = currentSinglePageIndex >= totalPages - 1;
          flipbookNextBtn.innerHTML = `${isMobileFlipbook() ? 'Next' : 'Next Page'} <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>`;
        }

        updateFlipbookPillState();
        rebindCornerHints();
        isFlipping = false;

        // Prefetch previous pages in background
        if (book.pdfDoc) {
          prefetchPdfPages(book.pdfDoc, [prevPageNum - 1, prevPageNum - 2], book);
        }
      }, 720);
      return;
    }

    if (currentSpreadIndex <= 0) return;

    isFlipping = true;
    playPageTurnSound();

    const curSpread = book.pages[currentSpreadIndex];
    const prevSpread = book.pages[currentSpreadIndex - 1];
    const curPageL = currentSpreadIndex * 2 + 1;
    const prevPageR = (currentSpreadIndex - 1) * 2 + 2;
    const prevPageL = (currentSpreadIndex - 1) * 2 + 1;

    // Trigger on-demand renders if not already cached
    if (prevSpread.left && prevSpread.left.isPdfPage && !prevSpread.left.imgSrc && prevSpread.left.pdfDoc) {
      renderPdfPage(prevSpread.left.pdfDoc, prevPageL, book).then(url => {
        if (url) updatePageImgInDom(prevPageL, url);
      });
    }
    if (prevSpread.right && prevSpread.right.isPdfPage && !prevSpread.right.imgSrc && prevSpread.right.pdfDoc) {
      renderPdfPage(prevSpread.right.pdfDoc, prevPageR, book).then(url => {
        if (url) updatePageImgInDom(prevPageR, url);
      });
    }

    // 1. Populate turning leaf front with current left page content
    if (flipbookLeafFrontContent) {
      flipbookLeafFrontContent.parentElement.classList.toggle('has-pdf', !!(curSpread.left && curSpread.left.isPdfPage));
      flipbookLeafFrontContent.innerHTML = buildPageHTML(curSpread.left, true, curPageL, totalPages);
    }

    // 2. Populate turning leaf back with previous right page content
    if (flipbookLeafBackContent) {
      flipbookLeafBackContent.parentElement.classList.toggle('has-pdf', !!(prevSpread.right && prevSpread.right.isPdfPage));
      flipbookLeafBackContent.innerHTML = buildPageHTML(prevSpread.right, false, prevPageR, totalPages);
    }

    // 3. Immediately reveal the underlying previous left page
    if (flipbookLeftPage) {
      flipbookLeftPage.classList.toggle('has-pdf', !!(prevSpread.left && prevSpread.left.isPdfPage));
      flipbookLeftPage.innerHTML = buildPageHTML(prevSpread.left, true, prevPageL, totalPages);
    }

    // 4. Trigger 3D flip animation
    if (flipbookLeaf) {
      flipbookLeaf.className = 'flipbook-leaf is-flipping flip-backward';
    }

    // 5. Complete transition
    setTimeout(() => {
      currentSpreadIndex--;
      currentSinglePageIndex = currentSpreadIndex * 2;

      // Land new right page
      if (flipbookRightPage) {
        flipbookRightPage.classList.toggle('has-pdf', !!(prevSpread.right && prevSpread.right.isPdfPage));
        flipbookRightPage.innerHTML = buildPageHTML(prevSpread.right, false, prevPageR, totalPages);
      }

      // Reset leaf
      if (flipbookLeaf) {
        flipbookLeaf.className = 'flipbook-leaf';
      }

      if (flipbookPageIndicator) {
        flipbookPageIndicator.textContent = `Pages ${prevPageL}–${prevPageR} of ${totalPages}`;
      }

      if (flipbookPrevBtn) flipbookPrevBtn.disabled = currentSpreadIndex === 0;
      if (flipbookNextBtn) flipbookNextBtn.disabled = currentSpreadIndex >= book.pages.length - 1;

      updateFlipbookPillState();
      rebindCornerHints();
      isFlipping = false;

      // Prefetch previous spread in background
      if (book.pdfDoc) {
        prefetchPdfPages(book.pdfDoc, [prevPageL - 1, prevPageL - 2], book);
      }
    }, 780);
  }

  /**
   * Generates and downloads a complete formatted publication document
   */
  function downloadBookPDF(bookId) {
    const targetId = bookId || (EBOOKS_DATA[currentBookIndex] ? EBOOKS_DATA[currentBookIndex].id : null);
    const book = EBOOKS_DATA.find(b => b.id === targetId) || EBOOKS_DATA[currentBookIndex];
    if (!book) return;

    // If the book has an uploaded PDF file or direct download URL, trigger instant direct download
    const directPdf = book.pdfUrl || book.url || book.downloadUrl;
    if (directPdf && directPdf !== '#') {
      const link = document.createElement('a');
      link.href = directPdf;
      link.download = (book.title ? book.title.replace(/[^a-zA-Z0-9_-]/g, '_') : 'BGSS-Publication') + '.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    // Create an elegant, printable publication document in memory
    const pagesHTML = book.pages.map((p, i) => `
      <section style="page-break-after: always; padding: 40px; margin-bottom: 30px; border: 1px solid #E2E8F0; background: #fff; border-radius: 8px;">
        <div style="display:flex; justify-content:space-between; border-bottom: 2px solid #A7253A; padding-bottom: 12px; margin-bottom: 24px;">
          <span style="font-size: 11px; text-transform: uppercase; font-weight: bold; letter-spacing: 0.1em; color: #A7253A;">BGSS & Associates • Chartered Accountants</span>
          <span style="font-size: 11px; color: #64748B;">Spread ${i + 1} of ${book.pages.length}</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
          <div>
            <div style="font-size: 10px; color: #64748B; text-transform: uppercase; margin-bottom: 10px;">${p.left.header}</div>
            <div style="font-size: 14px; line-height: 1.6; color: #1E293B;">${p.left.body}</div>
          </div>
          <div>
            <div style="font-size: 10px; color: #64748B; text-transform: uppercase; margin-bottom: 10px;">${p.right.header}</div>
            <div style="font-size: 14px; line-height: 1.6; color: #1E293B;">${p.right.body}</div>
          </div>
        </div>
        <div style="margin-top: 30px; border-top: 1px solid #E2E8F0; padding-top: 10px; display:flex; justify-content:space-between; font-size: 10px; color: #94A3B8;">
          <span>${p.left.footer}</span>
          <span>© ${new Date().getFullYear()} BGSS & Associates. All Rights Reserved.</span>
        </div>
      </section>
    `).join('');

    const fullDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${book.title} — BGSS & Associates</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #090E17; color: #1E293B; margin: 0; padding: 40px; }
    .doc-container { max-width: 900px; margin: 0 auto; background: #fff; padding: 50px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .doc-header { border-bottom: 3px solid #A7253A; padding-bottom: 25px; margin-bottom: 40px; }
    .doc-brand { font-size: 18px; font-weight: 800; color: #A7253A; letter-spacing: 0.1em; text-transform: uppercase; }
    .doc-title { font-size: 28px; font-weight: 700; color: #0F172A; margin: 12px 0 6px; }
    .doc-author { font-size: 14px; color: #64748B; }
    .flipbook-callout { background: #FFF5F6; border-left: 4px solid #A7253A; padding: 12px 16px; margin: 16px 0; font-size: 13px; color: #881337; }
    .flipbook-stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
    .flipbook-stat-box { background: #F8FAFC; border: 1px solid #E2E8F0; padding: 12px; border-radius: 6px; text-align: center; }
    .flipbook-stat-val { font-size: 18px; font-weight: bold; color: #A7253A; display: block; }
    .flipbook-stat-lbl { font-size: 11px; color: #64748B; text-transform: uppercase; }
    @media print {
      body { background: #fff; padding: 0; }
      .doc-container { box-shadow: none; padding: 0; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="doc-container">
    <div class="doc-header">
      <div class="doc-brand">BGSS & Associates • Chartered Accountants</div>
      <h1 class="doc-title">${book.title}</h1>
      <div class="doc-author">${book.author} • ${book.badge}</div>
      <p style="font-size:13px; color:#475569; margin-top:10px;">${book.summary}</p>
      <div class="no-print" style="margin-top:20px;">
        <button onclick="window.print()" style="background:#A7253A; color:#fff; border:none; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:bold;">Print / Save as PDF</button>
      </div>
    </div>
    ${pagesHTML}
  </div>
</body>
</html>`;

    const blob = new Blob([fullDoc], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const sanitizedTitle = book.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
    link.download = `BGSS-eBook-${sanitizedTitle}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /* ==========================================================================
     2. IN-WEBSITE PRESENTATION SLIDE PLAYER LOGIC
     ========================================================================== */

  const slideCanvasEl = document.getElementById('kbSlideCanvas');
  const slideDeckCards = document.querySelectorAll('.kb-deck-card');
  const slidePrevBtn = document.getElementById('kbSlidePrev');
  const slideNextBtn = document.getElementById('kbSlideNext');
  const slideCounterEl = document.getElementById('kbSlideCounter');
  const slidePlayBtn = document.getElementById('kbSlidePlay');
  const slideFullscreenBtn = document.getElementById('kbSlideFullscreen');
  const slideDownloadBtn = document.getElementById('kbSlideDownload');

  async function renderSlide() {
    const deck = PRESENTATIONS_DATA[currentDeckIndex];
    if (!deck) return;

    // Check if this deck is a PDF presentation that needs to be loaded into slides
    const isPdfDeck = !!(deck.fileUrl || deck.url) && (
      (deck.fileUrl && (deck.fileUrl.endsWith('.pdf') || deck.fileUrl.startsWith('data:application/pdf') || deck.fileUrl.includes('/admin/uploads/'))) ||
      (deck.url && (deck.url.endsWith('.pdf') || deck.url.startsWith('data:application/pdf') || deck.url.includes('/admin/uploads/')))
    );

    if (isPdfDeck && !deck.isInitializedPdfSlides) {
      const pdfTarget = deck.fileUrl || deck.url;
      try {
        const pdfDoc = await getPdfDoc(pdfTarget);
        if (pdfDoc && pdfDoc.numPages) {
          const num = pdfDoc.numPages;
          deck.slides = Array.from({ length: num }, (_, idx) => ({
            isPdfSlide: true,
            slideNum: idx + 1,
            pageNum: idx + 1,
            topic: deck.badge || 'Executive Presentation',
            pdfDoc,
            imgSrc: null
          }));
          deck.isInitializedPdfSlides = true;
          deck.pdfDoc = pdfDoc;
        }
      } catch (err) {
        console.warn('PDF presentation loading error:', err);
      }
    }

    if (!deck.slides || !deck.slides.length) return;
    if (currentSlideIndex >= deck.slides.length) currentSlideIndex = 0;

    const slide = deck.slides[currentSlideIndex];
    if (!slide || !slideCanvasEl) return;

    // Fast on-demand render for the current slide
    if (slide.isPdfSlide && !slide.imgSrc && slide.pdfDoc) {
      slide.imgSrc = await renderPdfPage(slide.pdfDoc, slide.pageNum, deck);
      // Silently pre-render next 2 slides in background
      prefetchPdfPages(slide.pdfDoc, [slide.pageNum + 1, slide.pageNum + 2], deck);
    }

    // Fade animation effect
    slideCanvasEl.style.opacity = '0';
    slideCanvasEl.style.transform = 'translateY(6px)';

    setTimeout(() => {
      if (slide.isPdfSlide) {
        slideCanvasEl.innerHTML = `
          <div class="kb-slide-pdf-container">
            <div class="kb-slide-pdf-badge">${slide.topic || deck.badge || 'Presentation'}</div>
            <img src="${slide.imgSrc}" alt="Slide ${slide.slideNum || (currentSlideIndex + 1)}" class="kb-slide-pdf-img">
          </div>
        `;
      } else if (slide.content) {
        slideCanvasEl.innerHTML = `
          <div class="kb-slide-header">
            <span class="kb-slide-topic-badge">${slide.topic || slide.category || deck.badge || 'Executive Presentation'}</span>
            <span class="kb-slide-brand-watermark">BGSS &amp; Associates</span>
          </div>
          <div class="kb-slide-body" style="padding:1.5rem;overflow-y:auto;height:calc(100% - 90px);">
            ${slide.content}
          </div>
          <div class="kb-slide-footer">
            <span>${deck.presenter || deck.speaker || 'BGSS Advisory Panel'} • ${deck.title}</span>
            <span style="font-weight:700; color:#D2909B;">${slide.slideNum || (currentSlideIndex + 1)}</span>
          </div>
        `;
      } else {
        const bulletsHTML = (slide.bullets || []).map(b => `
          <li>
            <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
            <span>${b}</span>
          </li>
        `).join('');

        const cardsHTML = (slide.cards || []).map(c => `
          <div class="kb-slide-card">
            <h5>${c.title}</h5>
            <p>${c.desc}</p>
          </div>
        `).join('');

        slideCanvasEl.innerHTML = `
          <div class="kb-slide-header">
            <span class="kb-slide-topic-badge">${slide.topic || 'Presentation'}</span>
            <span class="kb-slide-brand-watermark">BGSS &amp; Associates</span>
          </div>
          <div class="kb-slide-body">
            <h3 class="kb-slide-title">${slide.title || ''}</h3>
            <ul class="kb-slide-bullets">
              ${bulletsHTML}
            </ul>
            <div class="kb-slide-grid-3">
              ${cardsHTML}
            </div>
          </div>
          <div class="kb-slide-footer">
            <span>${deck.presenter || deck.speaker || 'BGSS Advisory Panel'} • ${deck.title}</span>
            <span style="font-weight:700; color:#D2909B;">${slide.slideNum || (currentSlideIndex + 1)}</span>
          </div>
        `;
      }

      slideCanvasEl.style.opacity = '1';
      slideCanvasEl.style.transform = 'translateY(0)';

      if (slideCounterEl) {
        const cur = String(currentSlideIndex + 1).padStart(2, '0');
        const tot = String(deck.slides.length).padStart(2, '0');
        slideCounterEl.textContent = `${cur} / ${tot}`;
      }

      if (slidePrevBtn) {
        slidePrevBtn.disabled = currentSlideIndex === 0;
      }
      if (slideNextBtn) {
        slideNextBtn.disabled = currentSlideIndex >= deck.slides.length - 1;
      }
    }, 120);
  }

  async function switchDeck(deckIndex) {
    if (deckIndex === currentDeckIndex && currentSlideIndex === 0) return;
    currentDeckIndex = deckIndex;
    currentSlideIndex = 0;

    const cards = document.querySelectorAll('.kb-deck-card');
    cards.forEach((card, idx) => {
      card.classList.toggle('active', idx === currentDeckIndex);
      card.setAttribute('aria-selected', idx === currentDeckIndex ? 'true' : 'false');
    });

    await renderSlide();
  }

  function slideNext() {
    const deck = PRESENTATIONS_DATA[currentDeckIndex];
    if (currentSlideIndex < deck.slides.length - 1) {
      currentSlideIndex++;
      renderSlide();
    } else if (isSlideAutoPlaying) {
      // Loop back to start in autoplay mode
      currentSlideIndex = 0;
      renderSlide();
    }
  }

  function slidePrev() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      renderSlide();
    }
  }

  function toggleSlideAutoPlay() {
    isSlideAutoPlaying = !isSlideAutoPlaying;
    if (slidePlayBtn) {
      slidePlayBtn.innerHTML = isSlideAutoPlaying ?
        '<i class="fa-solid fa-pause" aria-hidden="true"></i>' :
        '<i class="fa-solid fa-play" aria-hidden="true"></i>';
      slidePlayBtn.setAttribute('aria-label', isSlideAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow');
    }

    if (isSlideAutoPlaying) {
      slideAutoPlayTimer = setInterval(slideNext, 4500);
    } else {
      clearInterval(slideAutoPlayTimer);
      slideAutoPlayTimer = null;
    }
  }

  function downloadSlideDeck() {
    const deck = PRESENTATIONS_DATA[currentDeckIndex];
    if (!deck) return;

    const directFile = deck.fileUrl || deck.url;
    if (directFile && directFile !== '#') {
      const link = document.createElement('a');
      link.href = directFile;
      const ext = directFile.endsWith('.pptx') ? '.pptx' : directFile.endsWith('.ppt') ? '.ppt' : '.pdf';
      link.download = (deck.title ? deck.title.replace(/[^a-zA-Z0-9_-]/g, '_') : 'BGSS-Presentation') + ext;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    if (!deck) return;

    const slidesHTML = deck.slides.filter(s => !s.isPdfSlide).map((s, idx) => `
      <section style="page-break-after: always; padding: 30px; margin-bottom: 25px; border: 1px solid #1E293B; background: #0F172A; color: #fff; border-radius: 12px;">
        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:10px; margin-bottom:20px;">
          <span style="color:#D2909B; font-size:12px; font-weight:bold; letter-spacing:0.1em; text-transform:uppercase;">${s.topic || deck.badge || 'Presentation'}</span>
          <span style="color:rgba(255,255,255,0.5); font-size:12px;">BGSS & Associates</span>
        </div>
        <h2 style="font-size:22px; color:#fff; margin-bottom:20px;">${s.title || ''}</h2>
        ${s.content ? `<div style="font-size:14px;line-height:1.7;color:rgba(255,255,255,0.85);margin-bottom:25px;">${s.content}</div>` : ''}
        <ul style="font-size:14px; line-height:1.7; color:rgba(255,255,255,0.85); padding-left:20px; margin-bottom:25px;">
          ${(s.bullets || []).map(b => `<li>${b}</li>`).join('')}
        </ul>
        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:15px; margin-bottom:20px;">
          ${(s.cards || []).map(c => `
            <div style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:8px; padding:12px;">
              <div style="color:#D2909B; font-size:13px; font-weight:bold; margin-bottom:6px;">${c.title}</div>
              <div style="color:rgba(255,255,255,0.7); font-size:12px; line-height:1.4;">${c.desc}</div>
            </div>
          `).join('')}
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:10px; display:flex; justify-content:space-between; font-size:11px; color:rgba(255,255,255,0.5);">
          <span>${deck.presenter || deck.speaker || 'BGSS Advisory Panel'} • ${deck.title}</span>
          <span>Slide ${idx + 1} of ${deck.slides.length}</span>
        </div>
      </section>
    `).join('');

    const fullDeckDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${deck.title} — Slide Deck</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #060B13; color: #fff; padding: 40px; margin: 0; }
    .deck-container { max-width: 960px; margin: 0 auto; }
    @media print {
      body { background: #000; padding: 0; }
    }
  </style>
</head>
<body>
  <div class="deck-container">
    <div style="margin-bottom:30px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <h1 style="font-size:24px; margin:0 0 6px;">${deck.title}</h1>
        <div style="color:#D2909B; font-size:14px;">${deck.presenter || deck.speaker || 'BGSS Advisory Panel'} • ${deck.badge || ''}</div>
      </div>
      <button onclick="window.print()" style="background:#A7253A; color:#fff; border:none; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:bold;">Print / Save PDF</button>
    </div>
    ${slidesHTML}
  </div>
</body>
</html>`;

    const blob = new Blob([fullDeckDoc], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const sanitizedTitle = deck.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
    link.download = `BGSS-Deck-${sanitizedTitle}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /* ==========================================================================
     3. IN-WEBSITE YOUTUBE CINEMA PLAYER & PLAYLIST LOGIC
     ========================================================================== */

  const videoIframe = document.getElementById('kbVideoIframe');
  const videoTitleEl = document.getElementById('kbVideoCurrentTitle');
  const videoDescEl = document.getElementById('kbVideoCurrentDesc');
  const videoTopicTagEl = document.getElementById('kbVideoTopicTag');
  const videoCards = document.querySelectorAll('.kb-video-card');

  function switchVideo(videoIndex, autoPlay = true) {
    if (videoIndex === currentVideoIndex && videoIframe && videoIframe.src) return;
    currentVideoIndex = videoIndex;

    const video = VIDEOS_DATA[currentVideoIndex];
    if (!video) return;

    if (videoIframe) {
      // Use youtube-nocookie with enablejsapi and autoplay parameters
      const playParam = autoPlay ? '1' : '0';
      videoIframe.src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=${playParam}&rel=0&modestbranding=1`;
      videoIframe.title = video.title;
    }

    if (videoTitleEl) videoTitleEl.textContent = video.title;
    if (videoDescEl) videoDescEl.textContent = video.desc;
    if (videoTopicTagEl) videoTopicTagEl.textContent = `${video.badge} • ${video.speaker}`;

    videoCards.forEach((card, idx) => {
      card.classList.toggle('active', idx === currentVideoIndex);
      card.setAttribute('aria-selected', idx === currentVideoIndex ? 'true' : 'false');
    });
  }

  /* ==========================================================================
     4. SEARCH & FILTER LOGIC
     ========================================================================== */

  const quickSearchInput = document.getElementById('kbQuickSearch');

  function setupQuickSearch() {
    if (!quickSearchInput) return;

    quickSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();

      // Filter Books
      const bookCards = document.querySelectorAll('.kb-book-card');
      bookCards.forEach(card => {
        const title = card.querySelector('.kb-book-title')?.textContent.toLowerCase() || '';
        const summary = card.querySelector('.kb-book-summary')?.textContent.toLowerCase() || '';
        const author = card.querySelector('.kb-book-cover-author')?.textContent.toLowerCase() || '';
        const match = title.includes(q) || summary.includes(q) || author.includes(q);
        card.style.display = match ? '' : 'none';
      });

      // Filter Presentations
      const deckCards = document.querySelectorAll('.kb-deck-card');
      deckCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });

      // Filter Videos
      const vCards = document.querySelectorAll('.kb-video-card');
      vCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  /* ==========================================================================
     5. EVENT LISTENERS INITIALIZATION
     ========================================================================== */

  function initEventListeners() {
    // 1. Flipbook Open Buttons
    document.querySelectorAll('.js-open-flipbook').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const bookId = btn.getAttribute('data-book-id');
        openFlipbook(bookId);
      });
    });

    // 2. Flipbook Download Buttons on Cards
    document.querySelectorAll('.js-download-book').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const bookId = btn.getAttribute('data-book-id');
        downloadBookPDF(bookId);
      });
    });

    // 3. Flipbook Modal Controls (Bottom nav, floating side arrows, top toolbar quick nav)
    if (flipbookPrevBtn) flipbookPrevBtn.addEventListener('click', flipPrev);
    if (flipbookNextBtn) flipbookNextBtn.addEventListener('click', flipNext);
    if (flipbookSidePrevBtn) flipbookSidePrevBtn.addEventListener('click', flipPrev);
    if (flipbookSideNextBtn) flipbookSideNextBtn.addEventListener('click', flipNext);
    if (flipbookTopPrevBtn) flipbookTopPrevBtn.addEventListener('click', flipPrev);
    if (flipbookTopNextBtn) flipbookTopNextBtn.addEventListener('click', flipNext);
    if (flipbookCloseBtn) flipbookCloseBtn.addEventListener('click', closeFlipbook);
    if (flipbookViewModeBtn) flipbookViewModeBtn.addEventListener('click', toggleViewMode);
    if (flipbookFitWidthBtn) flipbookFitWidthBtn.addEventListener('click', toggleFitWidth);
    if (flipbookZoomInBtn) flipbookZoomInBtn.addEventListener('click', zoomIn);
    if (flipbookZoomOutBtn) flipbookZoomOutBtn.addEventListener('click', zoomOut);
    if (flipbookTextSizeBtn) flipbookTextSizeBtn.addEventListener('click', toggleTextSize);
    if (flipbookDownloadBtn) {
      flipbookDownloadBtn.addEventListener('click', () => downloadBookPDF());
    }

    // Direct page click to flip
    if (flipbookRightPage) {
      flipbookRightPage.addEventListener('click', (e) => {
        if (!e.target.closest('a, button, input, .flipbook-page-turn-bar, .flipbook-corner-hint, .flipbook-corner-hint-left')) {
          if (isSinglePage()) {
            const rect = flipbookRightPage.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            if (clickX < rect.width * 0.35) {
              flipPrev();
            } else {
              flipNext();
            }
          } else {
            flipNext();
          }
        }
      });
    }
    if (flipbookLeftPage) {
      flipbookLeftPage.addEventListener('click', (e) => {
        if (!e.target.closest('a, button, input, .flipbook-page-turn-bar, .flipbook-corner-hint, .flipbook-corner-hint-left')) {
          flipPrev();
        }
      });
    }

    if (flipbookFullscreenBtn) {
      flipbookFullscreenBtn.addEventListener('click', () => {
        const targetContainer = document.querySelector('.flipbook-container') || flipbookStage;
        if (!document.fullscreenElement) {
          targetContainer?.requestFullscreen?.().catch(err => console.log(err));
        } else {
          document.exitFullscreen?.();
        }
      });
    }

    // Modal background click to close
    if (flipbookModal) {
      flipbookModal.addEventListener('click', (e) => {
        if (e.target === flipbookModal) {
          closeFlipbook();
        }
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (flipbookModal && flipbookModal.classList.contains('open')) {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          flipNext();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          flipPrev();
        } else if (e.key === 'Escape') {
          closeFlipbook();
        }
      }
    });

    // 4. Presentation Controls
    if (slidePrevBtn) slidePrevBtn.addEventListener('click', slidePrev);
    if (slideNextBtn) slideNextBtn.addEventListener('click', slideNext);
    if (slidePlayBtn) slidePlayBtn.addEventListener('click', toggleSlideAutoPlay);
    if (slideDownloadBtn) slideDownloadBtn.addEventListener('click', downloadSlideDeck);

    const slideFlipbookBtn = document.getElementById('kbSlideFlipbook');
    if (slideFlipbookBtn) {
      slideFlipbookBtn.addEventListener('click', openPresentationInFlipbook);
    }

    if (slideFullscreenBtn) {
      slideFullscreenBtn.addEventListener('click', () => {
        const playerScreen = document.querySelector('.kb-deck-screen');
        if (!document.fullscreenElement && playerScreen) {
          playerScreen.requestFullscreen?.().catch(err => console.log(err));
        } else {
          document.exitFullscreen?.();
        }
      });
    }

    slideDeckCards.forEach((card, idx) => {
      card.addEventListener('click', () => switchDeck(idx));
    });

    // 5. Video Playlist Controls
    videoCards.forEach((card, idx) => {
      card.addEventListener('click', () => switchVideo(idx, true));
    });

    // 6. Sub-nav Smooth Scroll
    document.querySelectorAll('.kb-tab-btn').forEach(tab => {
      tab.addEventListener('click', function (e) {
        document.querySelectorAll('.kb-tab-btn').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // 7. Search Input
    setupQuickSearch();

    // 8. Mobile Touch Gestures for 3D Flipbook Reader
    if (flipbookStage) {
      let fbTouchStartX = 0;
      let fbTouchStartY = 0;
      let fbTouchStartTime = 0;

      flipbookStage.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          fbTouchStartX = e.touches[0].clientX;
          fbTouchStartY = e.touches[0].clientY;
          fbTouchStartTime = Date.now();
        }
      }, { passive: true });

      flipbookStage.addEventListener('touchend', (e) => {
        if (e.changedTouches.length === 1) {
          const diffX = e.changedTouches[0].clientX - fbTouchStartX;
          const diffY = e.changedTouches[0].clientY - fbTouchStartY;
          const duration = Date.now() - fbTouchStartTime;

          // Horizontal swipe detection (prioritizes horizontal drag over vertical scroll)
          if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY) * 1.15 && duration < 700) {
            if (diffX < 0) {
              flipNext();
            } else {
              flipPrev();
            }
          } else if (isMobileFlipbook() && Math.abs(diffX) < 14 && Math.abs(diffY) < 14 && duration < 320) {
            // Mobile edge tap: tap left 12% to go back, right 12% to go next
            const target = e.target;
            const isClickable = target && (target.closest('a') || target.closest('button') || target.closest('.flipbook-pill-dot'));
            if (!isClickable) {
              const tapX = e.changedTouches[0].clientX;
              const w = window.innerWidth;
              if (tapX < Math.min(56, w * 0.14)) {
                flipPrev();
              } else if (tapX > w - Math.min(56, w * 0.14)) {
                flipNext();
              }
            }
          }
        }
      }, { passive: true });
    }

    // 9. Mobile Touch Gestures for Presentation Player
    const deckScreen = document.querySelector('.kb-deck-screen');
    if (deckScreen) {
      let deckTouchStartX = 0;
      let deckTouchStartY = 0;
      let deckTouchStartTime = 0;

      deckScreen.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          deckTouchStartX = e.touches[0].clientX;
          deckTouchStartY = e.touches[0].clientY;
          deckTouchStartTime = Date.now();
        }
      }, { passive: true });

      deckScreen.addEventListener('touchend', (e) => {
        if (e.changedTouches.length === 1) {
          const diffX = e.changedTouches[0].clientX - deckTouchStartX;
          const diffY = e.changedTouches[0].clientY - deckTouchStartY;
          const duration = Date.now() - deckTouchStartTime;
          if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY) && duration < 650) {
            if (diffX < 0) {
              slideNext();
            } else {
              slidePrev();
            }
          }
        }
      }, { passive: true });
    }

    // 10. Responsive Screen Resize Listener (Switch single page <-> spread dynamically)
    let fbResizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(fbResizeTimer);
      fbResizeTimer = setTimeout(() => {
        if (flipbookModal && flipbookModal.classList.contains('open')) {
          renderFlipbookSpread();
          renderFlipbookPills();
        }
      }, 150);
    });
  }

  /* ==========================================================================
     6. DYNAMIC DOM RENDERERS (SYNCED WITH ADMIN DATA)
     ========================================================================== */

  function openPresentationInFlipbook() {
    const deck = PRESENTATIONS_DATA[currentDeckIndex];
    if (!deck) return;

    let bookId = 'deck-flip-' + currentDeckIndex;
    let book = EBOOKS_DATA.find(b => b.id === bookId || b.title === deck.title);
    if (!book) {
      book = {
        id: bookId,
        title: deck.title,
        author: deck.presenter || deck.speaker || 'BGSS Advisory Panel',
        theme: 'theme-navy',
        badge: deck.badge || 'Presentation Deck',
        year: '2024',
        summary: deck.desc || deck.description || 'Full slide deck readable in interactive 3D book format.',
        pdfUrl: deck.fileUrl || deck.url
      };
      EBOOKS_DATA.unshift(book);
    }
    openFlipbook(book.id);
  }

  function renderBooksGrid() {
    const grid = document.getElementById('kbBooksGrid');
    if (!grid) return;

    grid.innerHTML = EBOOKS_DATA.map(book => {
      const pagesCount = book.pagesCount || (book.pages ? book.pages.length * 2 : 8);
      const category = (book.tags && book.tags[0]) || book.badge || 'Appellate Handbook';
      const coverHTML = book.coverImage ? `
        <div class="kb-book-face has-cover-img" style="background-image:url('${book.coverImage}');background-size:cover;background-position:center;border-radius:3px 8px 8px 3px;">
          <div class="kb-book-emblem" style="background:rgba(0,0,0,0.65);position:absolute;top:10px;left:10px;right:10px;display:flex;justify-content:space-between;padding:4px 8px;border-radius:4px;">
            <span>BGSS Series</span>
            <span>${book.year || '2024 Ed.'}</span>
          </div>
        </div>
      ` : `
        <div class="kb-book-face ${book.theme || 'theme-crimson'}">
          <div class="kb-book-emblem">
            <span>BGSS Series</span>
            <span>${book.year || '2024 Ed.'}</span>
          </div>
          <div>
            <div style="font-size:0.6rem; letter-spacing:0.15em; text-transform:uppercase; color:#FFB3C1; font-weight:700;">${book.badge || 'Appellate Handbook'}</div>
            <h4 class="kb-book-cover-title">${book.title}</h4>
          </div>
          <div class="kb-book-cover-author">${book.author || 'BGSS Research Bureau'}</div>
        </div>
      `;

      const tagsHTML = (book.tags || [category, 'Special Release']).map(t => `<span class="kb-tag">${t}</span>`).join('');

      return `
        <article class="kb-book-card">
          <div class="kb-book-cover-wrap">
            <div class="kb-book-3d js-open-flipbook" data-book-id="${book.id}" role="button" aria-label="Read ${book.title} online">
              ${coverHTML}
            </div>
          </div>

          <div class="kb-book-meta">
            <span><i class="fa-regular fa-clock" aria-hidden="true"></i> ${pagesCount} Pages</span>
            <span>&bull;</span>
            <span><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> ${category}</span>
          </div>

          <h3 class="kb-book-title">${book.title}</h3>
          <p class="kb-book-summary">${book.summary || ''}</p>

          <div class="kb-book-tags">
            ${tagsHTML}
          </div>

          <div class="kb-book-actions">
            <button class="kb-btn-read js-open-flipbook" data-book-id="${book.id}" type="button">
              <i class="fa-solid fa-book-open" aria-hidden="true"></i> Read Online
            </button>
            <button class="kb-btn-download js-download-book" data-book-id="${book.id}" type="button">
              <i class="fa-solid fa-download" aria-hidden="true"></i> Download
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Rebind click listeners on the dynamically created cards
    grid.querySelectorAll('.js-open-flipbook').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const bookId = btn.getAttribute('data-book-id');
        openFlipbook(bookId);
      });
    });

    grid.querySelectorAll('.js-download-book').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const bookId = btn.getAttribute('data-book-id');
        downloadBookPDF(bookId);
      });
    });

    const ebookTabCount = document.querySelector('a[href="#ebooks"] .kb-tab-count');
    if (ebookTabCount) ebookTabCount.textContent = String(EBOOKS_DATA.length).padStart(2, '0');
  }

  function renderDecksList() {
    const list = document.getElementById('kbDeckList');
    if (!list) return;

    list.innerHTML = PRESENTATIONS_DATA.map((deck, idx) => {
      const icon = idx % 3 === 0 ? 'fa-scale-balanced' : (idx % 3 === 1 ? 'fa-globe' : 'fa-diagram-project');
      const count = deck.slides ? deck.slides.length : 5;
      const speaker = deck.presenter || deck.speaker || 'BGSS Advisory Panel';
      return `
        <div class="kb-deck-card ${idx === currentDeckIndex ? 'active' : ''}" data-deck-index="${idx}" role="tab" aria-selected="${idx === currentDeckIndex}">
          <div class="kb-deck-icon">
            <i class="fa-solid ${icon}" aria-hidden="true"></i>
          </div>
          <div class="kb-deck-card-info">
            <h5 class="kb-deck-card-title">${deck.title}</h5>
            <div class="kb-deck-card-meta">
              <span>${speaker}</span>
              <span>&bull;</span>
              <span>${count} Key Slides</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    list.querySelectorAll('.kb-deck-card').forEach((card, idx) => {
      card.addEventListener('click', () => switchDeck(idx));
    });

    const deckTabCount = document.querySelector('a[href="#presentations"] .kb-tab-count');
    if (deckTabCount) deckTabCount.textContent = String(PRESENTATIONS_DATA.length).padStart(2, '0');
  }

  function renderVideosList() {
    const list = document.getElementById('kbVideoList');
    if (!list) return;

    list.innerHTML = VIDEOS_DATA.map((video, idx) => {
      return `
        <div class="kb-video-card ${idx === currentVideoIndex ? 'active' : ''}" data-video-index="${idx}" role="tab" aria-selected="${idx === currentVideoIndex}">
          <div class="kb-video-thumb">
            <img src="${video.thumb || '/assets/images/service-litigation.jpg'}" alt="${video.title} Thumbnail">
            <span class="kb-video-duration">${video.duration || 'Keynote'}</span>
            <span class="kb-video-play-icon"><i class="fa-solid fa-play" aria-hidden="true"></i></span>
          </div>
          <div class="kb-video-card-info">
            <span class="kb-video-badge">${video.badge || 'Tax Briefing'}</span>
            <h5 class="kb-video-card-title">${video.title}</h5>
            <div class="kb-video-speaker">${video.speaker || 'BGSS Advisory Panel'}</div>
          </div>
        </div>
      `;
    }).join('');

    list.querySelectorAll('.kb-video-card').forEach((card, idx) => {
      card.addEventListener('click', () => switchVideo(idx, true));
    });

    const videoTabCount = document.querySelector('a[href="#videos"] .kb-tab-count');
    if (videoTabCount) videoTabCount.textContent = String(VIDEOS_DATA.length).padStart(2, '0');
  }

  /* ==========================================================================
     7. ADMIN DATA REAL-TIME SYNC & MERGE
     ========================================================================== */

  async function syncAdminData() {
    let localData = null;
    try {
      const raw = localStorage.getItem('bgss_admin_data');
      if (raw) localData = JSON.parse(raw);
    } catch (e) {}

    let serverData = null;
    try {
      const res = await fetch('/admin/data/site-data.json?t=' + Date.now());
      if (res.ok) {
        serverData = await res.json();
      }
    } catch (e) {}

    const mergedResources = {
      ebooks: [],
      presentations: [],
      videos: []
    };

    function addUnique(list, item) {
      if (!item || !item.title) return;
      if (!list.some(x => (x.id && item.id && x.id === item.id) || x.title.toLowerCase() === item.title.toLowerCase())) {
        list.push(item);
      }
    }

    if (localData && localData.resources) {
      (localData.resources.ebooks || []).forEach(e => addUnique(mergedResources.ebooks, e));
      (localData.resources.presentations || []).forEach(p => addUnique(mergedResources.presentations, p));
      (localData.resources.videos || []).forEach(v => addUnique(mergedResources.videos, v));
    }

    if (serverData && serverData.resources) {
      (serverData.resources.ebooks || []).forEach(e => addUnique(mergedResources.ebooks, e));
      (serverData.resources.presentations || []).forEach(p => addUnique(mergedResources.presentations, p));
      (serverData.resources.videos || []).forEach(v => addUnique(mergedResources.videos, v));
    }

    // 1. Process Custom YouTube Videos
    if (mergedResources.videos.length) {
      const liveVideos = mergedResources.videos.filter(v => v.published !== false);
      const mappedVideos = liveVideos.map((v, i) => {
        let ytId = '';
        const match = (v.url || '').match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
        if (match) ytId = match[1];
        return {
          id: v.id || `custom-video-${i}`,
          youtubeId: ytId || '3fumBcKC6RE',
          title: v.title,
          speaker: 'BGSS Advisory Panel',
          badge: v.category || 'Expert Briefing',
          duration: 'Keynote',
          views: 'New Release',
          tags: [v.category || 'Tax Advisory', 'Video Analysis'],
          desc: v.description || 'Exclusive briefing and strategic analysis by BGSS & Associates chartered accountants.'
        };
      });
      // Prepend without duplicate IDs
      mappedVideos.forEach(mv => {
        if (!VIDEOS_DATA.some(vd => vd.id === mv.id || vd.title.toLowerCase() === mv.title.toLowerCase())) {
          VIDEOS_DATA.unshift(mv);
        }
      });
    }

    // 2. Process Custom eBooks (with device-uploaded PDF support)
    if (mergedResources.ebooks.length) {
      const liveEbooks = mergedResources.ebooks.filter(e => e.published !== false);
      const mappedEbooks = liveEbooks.map((e, i) => {
        const pdfFile = e.pdfUrl || e.url || '';
        return {
          id: e.id || `custom-ebook-${i}`,
          title: e.title,
          author: 'BGSS Research Bureau',
          theme: 'theme-gold',
          badge: `${e.category || 'Special Report'} • ${e.date ? e.date.slice(0,4) : '2024'} Edition`,
          year: e.date ? e.date.slice(0,4) : '2024',
          pagesCount: e.pagesCount || 8,
          tags: [e.category || 'Advisory', 'Special Release'],
          summary: e.description || 'Comprehensive analytical monograph prepared by BGSS & Associates.',
          downloadUrl: pdfFile || '#',
          pdfUrl: pdfFile,
          coverImage: e.coverImage || '',
          pages: [
            {
              left: {
                header: `BGSS Research • ${e.category || 'Advisory'}`,
                body: `<div style="text-align:center;padding:2rem 1rem;">
                  <div style="font-size:0.75rem;letter-spacing:0.18em;text-transform:uppercase;color:#B8860B;font-weight:700;margin-bottom:1rem;">Executive Monograph</div>
                  <h3 style="font-size:1.5rem;color:#0D1B2A;line-height:1.25;margin-bottom:1rem;">${e.title}</h3>
                  <p style="font-size:0.85rem;color:#64748B;">${e.description || 'Strategic insights and technical guidance.'}</p>
                </div>`,
                footer: 'BGSS & Associates • Practice Insights'
              },
              right: {
                header: 'Executive Overview',
                body: `<h3>Monograph Summary</h3>
                <p>${e.description || 'This monograph is part of the BGSS Knowledge Bank series.'}</p>
                ${pdfFile ? `<div style="margin-top:1.5rem;"><a href="${pdfFile}" target="_blank" class="kb-action-btn" style="background:#0D1B2A;color:#fff;padding:8px 16px;border-radius:4px;text-decoration:none;font-size:0.85rem;display:inline-block;">Open / Download Resource &rarr;</a></div>` : ''}`,
                footer: 'Page 1 of 2'
              }
            }
          ]
        };
      });

      mappedEbooks.forEach(me => {
        if (!EBOOKS_DATA.some(ed => ed.id === me.id || ed.title.toLowerCase() === me.title.toLowerCase())) {
          EBOOKS_DATA.unshift(me);
        }
      });
    }

    // 3. Process Custom Presentations (with in-website reader & device file upload)
    if (mergedResources.presentations.length) {
      const livePres = mergedResources.presentations.filter(p => p.published !== false);
      const mappedPres = livePres.map((p, i) => {
        const fileTarget = p.fileUrl || p.url || '';
        return {
          id: p.id || `custom-pres-${i}`,
          title: p.title,
          badge: `${p.category || 'Executive Briefing'} • ${p.date ? p.date.slice(0,4) : '2024'}`,
          presenter: 'BGSS Advisory Panel',
          speaker: 'BGSS Advisory Panel',
          duration: 'Presentation Slide Deck',
          category: p.category || 'General Advisory',
          desc: p.description || 'Curated presentation slide deck on current tax and corporate regulatory developments.',
          downloadUrl: fileTarget || '#',
          fileUrl: fileTarget,
          slides: [
            {
              slideNum: 1,
              title: p.title,
              subtitle: 'BGSS & Associates Presentation Series',
              category: p.category || 'Advisory',
              topic: p.category || 'Executive Briefing',
              bullets: ['Strategic overview of ' + p.title, p.description || 'Comprehensive briefing'],
              cards: [{ title: 'Overview', desc: p.description || 'Executive analysis' }]
            }
          ]
        };
      });

      mappedPres.forEach(mp => {
        if (!PRESENTATIONS_DATA.some(pd => pd.id === mp.id || pd.title.toLowerCase() === mp.title.toLowerCase())) {
          PRESENTATIONS_DATA.unshift(mp);
        }
      });
    }

    // Update the DOM
    renderBooksGrid();
    renderDecksList();
    renderVideosList();
    await renderSlide();
  }

  // Self Initialization on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
      initEventListeners();
      await syncAdminData();
    });
  } else {
    initEventListeners();
    syncAdminData();
  }

  // Export to window for external triggers
  window.BGSSKnowledgeBank = {
    openFlipbook,
    closeFlipbook,
    downloadBookPDF,
    switchDeck,
    switchVideo
  };

})();
