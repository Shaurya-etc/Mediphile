/**
 * ==========================================================================
 * Mediphile - Hospital Management System
 * Core Application Logic (script.js)
 * Clean, Modular, and Multilingual (English / Hindi)
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Multilingual Translation Dictionary
// --------------------------------------------------------------------------
const translations = {
    en: {
        header_subtitle: "Hospital Network System",
        btn_enroll_patient: "Enroll Patient",
        btn_onboard_doctor: "Onboard Doctor",
        nav_dashboard: "Dashboard Overview",
        nav_patients: "Patients Directory",
        nav_doctors: "Doctors Roster",
        nav_pending: "Pending Enrolments",
        side_network: "Mediphile Network",
        side_emergency: "Active Emergency Ward",
        side_operational: "Operational",
        side_icu: "ICU Bed Availability",
        side_code: "Default Country Code",
        welcome_title: "Welcome to Mediphile",
        welcome_sub: "Manage Indian doctor onboarding, patient enrollments, bed capacity, and active department queues seamlessly.",
        stat_total_patients: "Total Patients",
        stat_currently_admitted: "currently admitted",
        stat_onboarded_docs: "Onboarded Doctors",
        stat_active_depts: "departments active",
        stat_pending_appr: "Pending Approvals",
        stat_awaiting_setup: "Doctors & Patients awaiting setup",
        stat_discharged_pats: "Discharged Patients",
        stat_completed_treatments: "Completed treatments",
        dash_recent_title: "Recent Enrollments & Onboarding",
        dash_view_all: "View All Requests",
        th_name: "Name",
        th_role_cond: "Role / Condition",
        th_contact: "Contact (+91)",
        th_status: "Status",
        th_action: "Action",
        th_patient_name: "Patient Name",
        th_age_gender: "Age / Gender",
        th_condition: "Condition",
        th_actions: "Actions",
        th_doctor_name: "Doctor Name",
        th_specialty: "Specialty",
        th_qualification: "Qualification",
        filter_status_label: "Status:",
        filter_dept_label: "Department:",
        opt_all_statuses: "All Statuses",
        opt_admitted: "Admitted",
        opt_enrolling: "Enrolling / Pending",
        opt_discharged: "Discharged",
        opt_all_depts: "All Departments",
        onboarding_queue_title: "Enrolment & Onboarding Queue",
        onboarding_queue_desc: "Review doctors and patients currently pending official verification into Mediphile Network.",
        pending_docs_title: "Pending Doctors",
        pending_pats_title: "Enrolling Patients",
        modal_patient_title: "Enroll New Patient",
        lbl_full_name: "Full Name",
        lbl_age: "Age",
        lbl_gender: "Gender",
        opt_male: "Male",
        opt_female: "Female",
        opt_other: "Other",
        lbl_contact_phone: "Indian Contact Mobile (+91)",
        lbl_condition: "Primary Health Issue / Condition",
        lbl_initial_status: "Initial Status",
        opt_admit_immediately: "Admit Immediately",
        opt_pending_onboarding: "Pending Onboarding",
        btn_cancel: "Cancel",
        btn_save_patient: "Save Patient",
        modal_doctor_title: "Onboard New Doctor",
        lbl_doctor_name: "Doctor Full Name",
        lbl_dept_specialty: "Department / Specialty",
        lbl_qualification: "Medical Degree / Qualification",
        lbl_onboarding_status: "Onboarding Status",
        opt_active_onboarded: "Active / Onboarded",
        opt_in_queue: "In Onboarding Queue",
        btn_save_doctor: "Save Doctor",
        btn_approve: "Approve",
        btn_admit: "Admit",
        btn_discharge: "Discharge",
        txt_verified: "Verified",
        txt_doctor: "Doctor",
        txt_patient: "Patient",
        search_patient_placeholder: "Search patient by name, condition or phone...",
        search_doctor_placeholder: "Search doctor by name, specialty, or qualification..."
    },
    hi: {
        header_subtitle: "अस्पताल नेटवर्क प्रणाली",
        btn_enroll_patient: "मरीज दर्ज करें",
        btn_onboard_doctor: "डॉक्टर जोड़ें",
        nav_dashboard: "डैशबोर्ड विवरण",
        nav_patients: "मरीज निर्देशिका",
        nav_doctors: "डॉक्टर सूची",
        nav_pending: "लंबित नामांकन",
        side_network: "मेडीफाइल नेटवर्क",
        side_emergency: "आपातकालीन वार्ड",
        side_operational: "सक्रिय (चालू)",
        side_icu: "आईसीयू बेड उपलब्धता",
        side_code: "देश का कोड",
        welcome_title: "मेडीफाइल में आपका स्वागत है",
        welcome_sub: "भारतीय डॉक्टरों का ऑनबोर्डिंग, मरीज नामांकन, बेड क्षमता और विभाग कतारों का सहज प्रबंधन करें।",
        stat_total_patients: "कुल मरीज",
        stat_currently_admitted: "वर्तमान में भर्ती",
        stat_onboarded_docs: "स्वीकृत डॉक्टर",
        stat_active_depts: "सक्रिय विभाग",
        stat_pending_appr: "लंबित स्वीकृतियां",
        stat_awaiting_setup: "प्रतीक्षारत डॉक्टर और मरीज",
        stat_discharged_pats: "डिस्चार्ज मरीज",
        stat_completed_treatments: "पूर्ण उपचार",
        dash_recent_title: "हाल के नामांकन और ऑनबोर्डिंग",
        dash_view_all: "सभी अनुरोध देखें",
        th_name: "नाम",
        th_role_cond: "भूमिका / स्थिति",
        th_contact: "संपर्क (+91)",
        th_status: "स्थिति",
        th_action: "कार्रवाई",
        th_patient_name: "मरीज का नाम",
        th_age_gender: "आयु / लिंग",
        th_condition: "स्वास्थ्य स्थिति",
        th_actions: "कार्रवाई",
        th_doctor_name: "डॉक्टर का नाम",
        th_specialty: "विशेषज्ञता",
        th_qualification: "योग्यता",
        filter_status_label: "स्थिति:",
        filter_dept_label: "विभाग:",
        opt_all_statuses: "सभी स्थितियाँ",
        opt_admitted: "भर्ती (Admitted)",
        opt_enrolling: "नामांकन जारी (Pending)",
        opt_discharged: "डिस्चार्ज (Discharged)",
        opt_all_depts: "सभी विभाग",
        onboarding_queue_title: "नामांकन और ऑनबोर्डिंग कतार",
        onboarding_queue_desc: "मेडीफाइल नेटवर्क में सत्यापन के लिए प्रतीक्षारत डॉक्टरों और मरीजों की समीक्षा करें।",
        pending_docs_title: "लंबित डॉक्टर",
        pending_pats_title: "प्रतीक्षारत मरीज",
        modal_patient_title: "नया मरीज दर्ज करें",
        lbl_full_name: "पूरा नाम",
        lbl_age: "आयु",
        lbl_gender: "लिंग",
        opt_male: "पुरुष",
        opt_female: "महिला",
        opt_other: "अन्य",
        lbl_contact_phone: "भारतीय मोबाइल नंबर (+91)",
        lbl_condition: "मुख्य बीमारी / स्थिति",
        lbl_initial_status: "प्रारंभिक स्थिति",
        opt_admit_immediately: "तुरंत भर्ती करें",
        opt_pending_onboarding: "कतार में रखें",
        btn_cancel: "रद्द करें",
        btn_save_patient: "मरीज सुरक्षित करें",
        modal_doctor_title: "नया डॉक्टर जोड़ें",
        lbl_doctor_name: "डॉक्टर का पूरा नाम",
        lbl_dept_specialty: "विभाग / विशेषज्ञता",
        lbl_qualification: "मेडिकल डिग्री / योग्यता",
        lbl_onboarding_status: "ऑनबोर्डिंग स्थिति",
        opt_active_onboarded: "सक्रिय / स्वीकृत",
        opt_in_queue: "ऑनबोर्डिंग कतार में",
        btn_save_doctor: "डॉक्टर सुरक्षित करें",
        btn_approve: "स्वीकृत करें",
        btn_admit: "भर्ती करें",
        btn_discharge: "डिस्चार्ज करें",
        txt_verified: "सत्यापित",
        txt_doctor: "डॉक्टर",
        txt_patient: "मरीज",
        search_patient_placeholder: "नाम, बीमारी या फोन से मरीज खोजें...",
        search_doctor_placeholder: "नाम, विशेषज्ञता या डिग्री से डॉक्टर खोजें..."
    }
};

let currentLang = localStorage.getItem('mediphile_lang') || 'en';

// --------------------------------------------------------------------------
// 2. Initial Demo Seed Data
// --------------------------------------------------------------------------
const initialData = {
    doctors: [
        { id: 'D-101', name: 'Dr. Rajesh Sharma', dept: 'Cardiology', qualification: 'MBBS, MD, DM', phone: '+91 98765 43210', status: 'Onboarded' },
        { id: 'D-102', name: 'Dr. Ananya Iyer', dept: 'Neurology', qualification: 'MBBS, DNB (Neuro)', phone: '+91 98123 45678', status: 'Onboarded' },
        { id: 'D-103', name: 'Dr. Vikram Patel', dept: 'Orthopedics', qualification: 'MBBS, MS (Ortho)', phone: '+91 99887 76655', status: 'Onboarded' },
        { id: 'D-104', name: 'Dr. Sunita Deshmukh', dept: 'Pediatrics', qualification: 'MBBS, MD (Peds)', phone: '+91 97654 32109', status: 'Onboarding' },
        { id: 'D-105', name: 'Dr. Arvind Swamy', dept: 'General Medicine', qualification: 'MBBS, MD', phone: '+91 91234 56789', status: 'Onboarding' }
    ],
    patients: [
        { id: 'P-501', name: 'Ramesh Kumar', age: 48, gender: 'Male', condition: 'Hypertension & Angina', phone: '+91 98450 11223', status: 'Admitted' },
        { id: 'P-502', name: 'Priya Sundaram', age: 29, gender: 'Female', condition: 'Migraine & Vertigo', phone: '+91 97312 33445', status: 'Admitted' },
        { id: 'P-503', name: 'Suresh Verma', age: 62, gender: 'Male', condition: 'Knee Joint Replacement', phone: '+91 96201 55667', status: 'Admitted' },
        { id: 'P-504', name: 'Kavita Reddy', age: 35, gender: 'Female', condition: 'Viral Fever / Dengue', phone: '+91 95132 77889', status: 'Enrolling' },
        { id: 'P-505', name: 'Amitabh Chatterjee', age: 54, gender: 'Male', condition: 'Post-Op Observation', phone: '+91 94003 99001', status: 'Discharged' }
    ]
};

// --------------------------------------------------------------------------
// 3. Application State & Storage
// --------------------------------------------------------------------------
let appState = {
    doctors: JSON.parse(localStorage.getItem('mediphile_doctors')) || initialData.doctors,
    patients: JSON.parse(localStorage.getItem('mediphile_patients')) || initialData.patients
};

function saveData() {
    localStorage.setItem('mediphile_doctors', JSON.stringify(appState.doctors));
    localStorage.setItem('mediphile_patients', JSON.stringify(appState.patients));
    updateDashboardStats();
}

function resetDemoData() {
    const confirmMsg = currentLang === 'hi' 
        ? "क्या आप मेडीफाइल डेटाबेस को मूल भारतीय डेमो रिकॉर्ड पर रीसेट करना चाहते हैं?" 
        : "Reset Mediphile database to default Indian demo records?";
    if (confirm(confirmMsg)) {
        appState.doctors = [...initialData.doctors];
        appState.patients = [...initialData.patients];
        saveData();
        renderAllTabs();
    }
}

// --------------------------------------------------------------------------
// 4. Localization Handlers
// --------------------------------------------------------------------------
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('mediphile_lang', lang);
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = lang;
    applyTranslations();
    renderAllTabs();
}

function applyTranslations() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerText = t[key];
        }
    });

    // Update dynamic search placeholders
    const patSearch = document.getElementById('patient-search');
    if (patSearch) patSearch.placeholder = t.search_patient_placeholder;
    const docSearch = document.getElementById('doctor-search');
    if (docSearch) docSearch.placeholder = t.search_doctor_placeholder;
}

// --------------------------------------------------------------------------
// 5. Navigation & Tab Switching
// --------------------------------------------------------------------------
function switchTab(tabName) {
    const tabs = ['dashboard', 'patients', 'doctors', 'onboarding'];
    
    tabs.forEach(t => {
        const tabPane = document.getElementById(`tab-${t}`);
        if (tabPane) tabPane.classList.add('hidden');
        
        const navBtn = document.getElementById(`nav-${t}`);
        if (navBtn) {
            navBtn.classList.remove('active', 'bg-brand-50', 'text-brand-700');
            navBtn.classList.add('text-slate-600');
        }
    });

    const activeTab = document.getElementById(`tab-${tabName}`);
    if (activeTab) activeTab.classList.remove('hidden');

    const activeBtn = document.getElementById(`nav-${tabName}`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'bg-brand-50', 'text-brand-700');
        activeBtn.classList.remove('text-slate-600');
    }

    if (tabName === 'patients') renderPatients();
    if (tabName === 'doctors') renderDoctors();
    if (tabName === 'onboarding') renderOnboarding();
}

// --------------------------------------------------------------------------
// 6. Modal Dialog Controls
// --------------------------------------------------------------------------
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
}

// --------------------------------------------------------------------------
// 7. Form Handlers & Submission
// --------------------------------------------------------------------------
function handlePatientSubmit(e) {
    e.preventDefault();
    const phoneVal = document.getElementById('p-phone').value.trim();
    const newPatient = {
        id: 'P-' + Math.floor(100 + Math.random() * 900),
        name: document.getElementById('p-name').value.trim(),
        age: parseInt(document.getElementById('p-age').value, 10),
        gender: document.getElementById('p-gender').value,
        phone: '+91 ' + phoneVal,
        condition: document.getElementById('p-condition').value.trim(),
        status: document.getElementById('p-status').value
    };

    appState.patients.unshift(newPatient);
    saveData();
    document.getElementById('patientForm').reset();
    closeModal('patientModal');
    renderAllTabs();
}

function handleDoctorSubmit(e) {
    e.preventDefault();
    const phoneVal = document.getElementById('d-phone').value.trim();
    const newDoctor = {
        id: 'D-' + Math.floor(100 + Math.random() * 900),
        name: document.getElementById('d-name').value.trim(),
        dept: document.getElementById('d-dept').value,
        qualification: document.getElementById('d-degree').value.trim(),
        phone: '+91 ' + phoneVal,
        status: document.getElementById('d-status').value
    };

    appState.doctors.unshift(newDoctor);
    saveData();
    document.getElementById('doctorForm').reset();
    closeModal('doctorModal');
    renderAllTabs();
}

// --------------------------------------------------------------------------
// 8. Status Promotion Actions
// --------------------------------------------------------------------------
function updateDoctorStatus(id, newStatus) {
    const doc = appState.doctors.find(d => d.id === id);
    if (doc) {
        doc.status = newStatus;
        saveData();
        renderAllTabs();
    }
}

function updatePatientStatus(id, newStatus) {
    const pat = appState.patients.find(p => p.id === id);
    if (pat) {
        pat.status = newStatus;
        saveData();
        renderAllTabs();
    }
}

// --------------------------------------------------------------------------
// 9. Dashboard Rendering Logic
// --------------------------------------------------------------------------
function updateDashboardStats() {
    const totalPatients = appState.patients.length;
    const admittedPatients = appState.patients.filter(p => p.status === 'Admitted').length;
    const dischargedPatients = appState.patients.filter(p => p.status === 'Discharged').length;
    const totalDoctors = appState.doctors.filter(d => d.status === 'Onboarded').length;
    const pendingDocs = appState.doctors.filter(d => d.status === 'Onboarding').length;
    const pendingPats = appState.patients.filter(p => p.status === 'Enrolling').length;
    
    const depts = new Set(appState.doctors.filter(d => d.status === 'Onboarded').map(d => d.dept));

    const elTotalPatients = document.getElementById('stat-total-patients');
    if (elTotalPatients) elTotalPatients.innerText = totalPatients;

    const elAdmittedPatients = document.getElementById('stat-admitted-patients');
    if (elAdmittedPatients) elAdmittedPatients.innerText = admittedPatients;

    const elDischargedPatients = document.getElementById('stat-discharged-patients');
    if (elDischargedPatients) elDischargedPatients.innerText = dischargedPatients;

    const elTotalDoctors = document.getElementById('stat-total-doctors');
    if (elTotalDoctors) elTotalDoctors.innerText = totalDoctors;

    const elActiveDepts = document.getElementById('stat-active-departments');
    if (elActiveDepts) elActiveDepts.innerText = depts.size;

    const elPendingTotal = document.getElementById('stat-pending-total');
    if (elPendingTotal) elPendingTotal.innerText = pendingDocs + pendingPats;

    // Badges in Sidebar
    const badgePatients = document.getElementById('badge-patients-count');
    if (badgePatients) badgePatients.innerText = totalPatients;

    const badgeDoctors = document.getElementById('badge-doctors-count');
    if (badgeDoctors) badgeDoctors.innerText = totalDoctors;

    const badgePending = document.getElementById('badge-pending-count');
    if (badgePending) badgePending.innerText = pendingDocs + pendingPats;

    renderDashboardRecentTable();
}

function renderDashboardRecentTable() {
    const tbody = document.getElementById('dashboard-recent-table');
    if (!tbody) return;
    const t = translations[currentLang];

    const combinedQueue = [
        ...appState.doctors.filter(d => d.status === 'Onboarding').map(d => ({ ...d, type: t.txt_doctor })),
        ...appState.patients.filter(p => p.status === 'Enrolling').map(p => ({ ...p, type: t.txt_patient }))
    ].slice(0, 5);

    if (combinedQueue.length === 0) {
        const emptyTxt = currentLang === 'hi' ? 'कतार में कोई लंबित नामांकन नहीं है।' : 'No pending enrollments in queue.';
        tbody.innerHTML = `<tr><td colspan="5" class="text-center text-slate-400" style="padding: 1.5rem;">${emptyTxt}</td></tr>`;
        return;
    }

    tbody.innerHTML = combinedQueue.map(item => `
        <tr>
            <td>
                <span class="font-semibold text-slate-800">${item.name}</span>
                <span class="type-pill">${item.type}</span>
            </td>
            <td>${item.dept || item.condition}</td>
            <td class="font-mono text-xs">${item.phone}</td>
            <td>
                <span class="status-badge badge-enrolling">${t.opt_enrolling}</span>
            </td>
            <td class="text-right">
                ${item.type === t.txt_doctor ? 
                    `<button onclick="updateDoctorStatus('${item.id}', 'Onboarded')" class="btn-action-approve">${t.btn_approve}</button>` :
                    `<button onclick="updatePatientStatus('${item.id}', 'Admitted')" class="btn-action-admit">${t.btn_admit}</button>`
                }
            </td>
        </tr>
    `).join('');
}

// --------------------------------------------------------------------------
// 10. Patients Directory Table Rendering
// --------------------------------------------------------------------------
function renderPatients() {
    const tbody = document.getElementById('patients-table-body');
    if (!tbody) return;
    const search = (document.getElementById('patient-search')?.value || '').toLowerCase();
    const filterStatus = document.getElementById('patient-filter-status')?.value || 'ALL';
    const t = translations[currentLang];

    const filtered = appState.patients.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search) || 
                              p.condition.toLowerCase().includes(search) || 
                              p.phone.includes(search);
        const matchesStatus = filterStatus === 'ALL' || p.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    if (filtered.length === 0) {
        const emptyTxt = currentLang === 'hi' ? 'कोई मरीज रिकॉर्ड नहीं मिला।' : 'No patient records found.';
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-slate-400" style="padding: 2rem;">${emptyTxt}</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(p => {
        let badgeClass = 'status-badge';
        let statusLabel = p.status;
        if (p.status === 'Admitted') {
            badgeClass = 'status-badge badge-admitted';
            statusLabel = t.opt_admitted;
        } else if (p.status === 'Enrolling') {
            badgeClass = 'status-badge badge-enrolling';
            statusLabel = t.opt_enrolling;
        } else if (p.status === 'Discharged') {
            badgeClass = 'status-badge badge-discharged';
            statusLabel = t.opt_discharged;
        }

        const genderTxt = currentLang === 'hi' 
            ? (p.gender === 'Male' ? 'पुरुष' : p.gender === 'Female' ? 'महिला' : 'अन्य') 
            : p.gender;

        return `
            <tr>
                <td>
                    <div class="font-semibold text-slate-900">${p.name}</div>
                    <div class="sub-id">${p.id}</div>
                </td>
                <td>${p.age} ${currentLang === 'hi' ? 'वर्ष' : 'yrs'} / ${genderTxt}</td>
                <td class="font-medium text-slate-700">${p.condition}</td>
                <td class="font-mono text-xs">${p.phone}</td>
                <td><span class="${badgeClass}">${statusLabel}</span></td>
                <td class="text-right" style="white-space: nowrap;">
                    ${p.status === 'Enrolling' ? `<button onclick="updatePatientStatus('${p.id}', 'Admitted')" class="btn-action-admit">${t.btn_admit}</button>` : ''}
                    ${p.status === 'Admitted' ? `<button onclick="updatePatientStatus('${p.id}', 'Discharged')" class="btn-action-discharge">${t.btn_discharge}</button>` : ''}
                </td>
            </tr>
        `;
    }).join('');
}

// --------------------------------------------------------------------------
// 11. Doctors Roster Table Rendering
// --------------------------------------------------------------------------
function renderDoctors() {
    const tbody = document.getElementById('doctors-table-body');
    if (!tbody) return;
    const search = (document.getElementById('doctor-search')?.value || '').toLowerCase();
    const filterDept = document.getElementById('doctor-filter-dept')?.value || 'ALL';
    const t = translations[currentLang];

    const filtered = appState.doctors.filter(d => {
        const matchesSearch = d.name.toLowerCase().includes(search) || 
                              d.qualification.toLowerCase().includes(search) || 
                              d.dept.toLowerCase().includes(search);
        const matchesDept = filterDept === 'ALL' || d.dept === filterDept;
        return matchesSearch && matchesDept;
    });

    if (filtered.length === 0) {
        const emptyTxt = currentLang === 'hi' ? 'कोई डॉक्टर रिकॉर्ड नहीं मिला।' : 'No doctor records found.';
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-slate-400" style="padding: 2rem;">${emptyTxt}</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(d => {
        const isApproved = d.status === 'Onboarded';
        const statusLabel = isApproved ? t.opt_active_onboarded : t.opt_in_queue;
        const badgeClass = isApproved ? 'status-badge badge-admitted' : 'status-badge badge-enrolling';
        
        return `
            <tr>
                <td>
                    <div class="font-semibold text-slate-900">${d.name}</div>
                    <div class="sub-id">${d.id}</div>
                </td>
                <td><span class="badge-dept">${d.dept}</span></td>
                <td>${d.qualification}</td>
                <td class="font-mono text-xs">${d.phone}</td>
                <td><span class="${badgeClass}">${statusLabel}</span></td>
                <td class="text-right">
                    ${!isApproved ? `<button onclick="updateDoctorStatus('${d.id}', 'Onboarded')" class="btn-action-approve">${t.btn_approve}</button>` : `<span class="text-xs text-slate-400">${t.txt_verified}</span>`}
                </td>
            </tr>
        `;
    }).join('');
}

// --------------------------------------------------------------------------
// 12. Pending Onboarding Queue Rendering
// --------------------------------------------------------------------------
function renderOnboarding() {
    const docList = document.getElementById('pending-doctors-list');
    const patList = document.getElementById('pending-patients-list');
    if (!docList || !patList) return;
    const t = translations[currentLang];

    const pendingDocs = appState.doctors.filter(d => d.status === 'Onboarding');
    const pendingPats = appState.patients.filter(p => p.status === 'Enrolling');

    const countDocs = document.getElementById('pending-doctors-count');
    if (countDocs) countDocs.innerText = pendingDocs.length;

    const countPats = document.getElementById('pending-patients-count');
    if (countPats) countPats.innerText = pendingPats.length;

    if (pendingDocs.length === 0) {
        const emptyTxt = currentLang === 'hi' ? 'कोई लंबित डॉक्टर ऑनबोर्डिंग नहीं।' : 'No pending doctor onboardings.';
        docList.innerHTML = `<p class="text-xs text-slate-400 text-center" style="padding: 1.5rem 0;">${emptyTxt}</p>`;
    } else {
        docList.innerHTML = pendingDocs.map(d => `
            <div class="queue-item">
                <div>
                    <h5 class="queue-item-name">${d.name}</h5>
                    <p class="queue-item-meta">${d.dept} • ${d.qualification}</p>
                    <p class="queue-item-phone">${d.phone}</p>
                </div>
                <button onclick="updateDoctorStatus('${d.id}', 'Onboarded')" class="btn-action-approve">${t.btn_approve}</button>
            </div>
        `).join('');
    }

    if (pendingPats.length === 0) {
        const emptyTxt = currentLang === 'hi' ? 'कोई लंबित मरीज नामांकन नहीं।' : 'No pending patient enrollments.';
        patList.innerHTML = `<p class="text-xs text-slate-400 text-center" style="padding: 1.5rem 0;">${emptyTxt}</p>`;
    } else {
        patList.innerHTML = pendingPats.map(p => {
            const genderTxt = currentLang === 'hi' 
                ? (p.gender === 'Male' ? 'पुरुष' : p.gender === 'Female' ? 'महिला' : 'अन्य') 
                : p.gender;
            return `
                <div class="queue-item">
                    <div>
                        <h5 class="queue-item-name">${p.name}</h5>
                        <p class="queue-item-meta">${p.age} ${currentLang === 'hi' ? 'वर्ष' : 'yrs'}, ${genderTxt} • ${p.condition}</p>
                        <p class="queue-item-phone">${p.phone}</p>
                    </div>
                    <button onclick="updatePatientStatus('${p.id}', 'Admitted')" class="btn-action-admit">${t.btn_admit}</button>
                </div>
            `;
        }).join('');
    }
}

// --------------------------------------------------------------------------
// 13. Master Render Trigger & Initialization
// --------------------------------------------------------------------------
function renderAllTabs() {
    updateDashboardStats();
    renderPatients();
    renderDoctors();
    renderOnboarding();
}

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(currentLang);
});

