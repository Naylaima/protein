// Search 
document.querySelector('.search-bar input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// hover effect table row
const rows = document.querySelectorAll('tbody tr');
rows.forEach(row => {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = 'rgba(44, 62, 80, 0.2)';
    });
    row.addEventListener('mouseout', () => {
        row.style.backgroundColor = '';
    });
});


// INVENTORY
// Dialog Add Functions
function showAddInventoryDialog() {
    document.getElementById('addInventoryDialog').style.display = 'flex';
}

function closeInventoryDialog() {
    document.getElementById('addInventoryDialog').style.display = 'none';
}

// Form submission handler
document.getElementById('inventoryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get all form values
    const formData = {
        id: document.getElementById('id').value,
        kodeAlat: document.getElementById('kodeAlat').value,
        namaPeralatan: document.getElementById('namaPeralatan').value,
        unit: document.getElementById('unit').value,
        fasilitas: document.getElementById('fasilitas').value,
        cabang: document.getElementById('cabang').value,
        cabang: document.getElementById('tanggal').value
    };
    
    // Here you would typically send this data to a server
    console.log('Form submitted with data:', formData);
    
    // Close the dialog
    closeInventoryDialog();
    
    // Reset the form
    this.reset();
});

// Close dialog when clicking outside
document.getElementById('addInventoryDialog').addEventListener('click', function(e) {
    if (e.target === this) {
        closeDialog();
    }
});

//edit inventory dialog
function openEditInventoryDialog(id, kodeAlat, cabang, unit, fasilitas, namaPeralatan) {
    document.getElementById('editId').value = id;
    document.getElementById('editKodeAlat').value = kodeAlat;
    document.getElementById('editCabang').value = cabang;
    document.getElementById('editUnit').value = unit;
    document.getElementById('editFasilitas').value = fasilitas;
    document.getElementById('editNamaPeralatan').value = namaPeralatan;
    document.getElementById('editTanggal').value = namaPeralatan;

    document.getElementById('editInventoryDialog').style.display = 'flex';
}

function closeEditInventoryDialog() {
    document.getElementById('editInventoryDialog').style.display = 'none';
}

// delete inventory dialog
function openDeleteInventoryDialog() {
    document.getElementById('deleteDialog').style.display = 'flex'; // Tampilkan dialog
}

function closeDeleteInventoryDialog() {
    document.getElementById('deleteDialog').style.display = 'none'; // Sembunyikan dialog
}

function confirmDeleteInventory() {
    // Tambahkan logika penghapusan data di sini
    alert("Data berhasil dihapus!");
    closeDeleteInventoryDialog(); // Tutup dialog setelah menghapus
}


// BERITA ACARA & SERAH TERIMA
// Dialog Functions
function showAddBeritaDialog() {
    document.getElementById('addBeritaAcaraDialog').style.display = 'flex';
}

function closeBeritaDialog() {
    document.getElementById('addBeritaAcaraDialog').style.display = 'none';
}

// Form submission handler
document.getElementById('beritaAcaraForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get all form values
    const formData = {
        id: document.getElementById('id').value,
        kodeAlat: document.getElementById('noberita').value,
        namaPeralatan: document.getElementById('namaberita').value,
        unit: document.getElementById('fromunit').value,
        fasilitas: document.getElementById('tounit').value,
        cabang: document.getElementById('keterangan').value
    };
    
    // Here you would typically send this data to a server
    console.log('Form submitted with data:', formData);
    
    // Close the dialog
    closeBeritaDialog();
    
    // Reset the form
    this.reset();
});

// Close dialog when clicking outside
document.getElementById('addBeritaAcaraDialog').addEventListener('click', function(e) {
    if (e.target === this) {
        closeBeritaDialog();
    }
});

// Edit berita
function openEditBeritaDialog(id, noBerita, namaBerita, fromUnit, toUnit, keterangan, tanggal, file) {
    document.getElementById('editId').value = id;
    document.getElementById('editNoBerita').value = noBerita;
    document.getElementById('editNamaBerita').value = namaBerita;
    document.getElementById('editFromUnit').value = fromUnit;
    document.getElementById('editToUnit').value = toUnit;
    document.getElementById('editKeterangan').value = keterangan;

    // Set file if applicable (optional: display file name or link)
    if (file) {
        const fileInput = document.getElementById('editFile');
        fileInput.setAttribute('data-existing-file', file); // Store file metadata if needed
    }

    // Show the dialog
    document.getElementById('editBeritaDialog').style.display = 'flex';
}

function closeEditBeritaDialog() {
    document.getElementById('editBeritaDialog').style.display = 'none';
}

// delete berita dialog
function openDeleteBeritaDialog() {
    document.getElementById('deleteBeritaDialog').style.display = 'flex'; // Tampilkan dialog
}

function closeDeleteBeritaDialog() {
    document.getElementById('deleteBeritaDialog').style.display = 'none'; // Sembunyikan dialog
}

function confirmDeleteBerita() {
    // Tambahkan logika penghapusan data di sini
    alert("Data berhasil dihapus!");
    closeDeleteBeritaDialog(); // Tutup dialog setelah menghapus
}


// LISTBARANG
function showAddListDialog() {
    document.getElementById('addListBarang').style.display = 'flex';
}

function closeListDialog() {
    document.getElementById('addListBarang').style.display = 'none';
}

// Add button click handler
// document.querySelector('.add-button').addEventListener('click', showAddDialog);

// Form submission handler
document.getElementById('listForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get all form values
    const formData = {
        id: document.getElementById('id').value,
        kodeAlat: document.getElementById('kodeAlat').value,
        namaPeralatan: document.getElementById('namaBarang').value
    };
    
    // Here you would typically send this data to a server
    console.log('Form submitted with data:', formData);
    
    // Close the dialog
    closeListDialog();
    
    // Reset the form
    this.reset();
});

// Close dialog when clicking outside
document.getElementById('addListBarang').addEventListener('click', function(e) {
    if (e.target === this) {
        closeListDialog();
    }
});

//edit list dialog
function openEditListDialog(id, kodeAlat, namaBarang) {
    document.getElementById('editId').value = id;
    document.getElementById('editKodeAlat').value = kodeAlat;
    document.getElementById('editNamaBarang').value = namaBarang;

    document.getElementById('editListDialog').style.display = 'flex';
}

function closeEditListDialog() {
    document.getElementById('editListDialog').style.display = 'none';
}

// delete inventory dialog
function openDeleteListDialog() {
    document.getElementById('deleteListDialog').style.display = 'flex'; // Tampilkan dialog
}

function closeDeleteListDialog() {
    document.getElementById('deleteListDialog').style.display = 'none'; // Sembunyikan dialog
}

function confirmDeleteList() {
    // Tambahkan logika penghapusan data di sini
    alert("Data berhasil dihapus!");
    closeDeleteListDialog(); // Tutup dialog setelah menghapus
}


// LOGBOOK
function showAddLogbookDialog() {
    document.getElementById('addLogbookDialog').style.display = 'flex';
}

function closeLogbookDialog() {
    document.getElementById('addLogbookDialog').style.display = 'none';
}

// Add button click handler
// document.querySelector('.add-button').addEventListener('click', showAddDialog);

// Form submission handler
document.getElementById('listForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get all form values
    const formData = {
        no: document.getElementById('no').value,
        kegiatan: document.getElementById('kegiatan').value,
        tanggal: document.getElementById('tanggal').value
    };
    
    // Here you would typically send this data to a server
    console.log('Form submitted with data:', formData);
    
    // Close the dialog
    closeLogbookDialog();
    
    // Reset the form
    this.reset();
});

// Close dialog when clicking outside
document.getElementById('addLogbook').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLogbookDialog();
    }
});

//edit list dialog
function openEditLogbookDialog(no, kegiatan, tanggal) {
    document.getElementById('editNo').value = no;
    document.getElementById('editKegiatan').value = kegiatan;
    document.getElementById('editTanggal').value = tanggal;

    document.getElementById('editLogbookDialog').style.display = 'flex';
}

function closeEditLogbookDialog() {
    document.getElementById('editLogbookDialog').style.display = 'none';
}

// delete inventory dialog
function openDeleteLogbookDialog() {
    document.getElementById('deleteLogbookDialog').style.display = 'flex'; // Tampilkan dialog
}

function closeDeleteLogbookDialog() {
    document.getElementById('deleteLogbookDialog').style.display = 'none'; // Sembunyikan dialog
}

function confirmDeleteLogbook() {
    // Tambahkan logika penghapusan data di sini
    alert("Data berhasil dihapus!");
    closeDeleteLogbookDialog(); // Tutup dialog setelah menghapus
}



