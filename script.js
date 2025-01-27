// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle menu mobile
const toggleMenu = () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Tambahkan class active pada menu saat di-scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Dark mode toggle with localStorage and system preference detection
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
}

const toggleDarkMode = () => {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Check for saved theme preference or system preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    enableDarkMode();
} else if (currentTheme === 'light') {
    disableDarkMode();
} else if (prefersDarkScheme.matches) {
    enableDarkMode();
}

// Listen for system theme changes
prefersDarkScheme.addListener((e) => {
    if (localStorage.getItem('theme')) return; // Skip if user has preference
    if (e.matches) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Chatbot functionality
const toggleChatbot = () => {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('show');
}

const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

const sendMessage = () => {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message) {
        addMessage('user', message);
        input.value = '';
        
        // Simulate bot thinking
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage('bot', response);
        }, 1000);
    }
}

const addMessage = (type, message) => {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    const icon = document.createElement('i');
    icon.className = type === 'user' ? 'fas fa-user' : 'fas fa-robot';
    
    const text = document.createElement('p');
    text.textContent = message;
    
    messageDiv.appendChild(icon);
    messageDiv.appendChild(text);
    messagesDiv.appendChild(messageDiv);
    
    // Auto scroll to bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

const getBotResponse = (message) => {
    message = message.toLowerCase();
    
    if (message.includes('halo') || message.includes('hi') || message.includes('hello')) {
        return 'Halo! Ada yang bisa saya bantu? Anda juga bisa menghubungi saya langsung melalui WhatsApp di nomor 085773023495';
    }
    else if (message.includes('whatsapp') || message.includes('wa') || message.includes('hubungi')) {
        return 'Anda bisa menghubungi saya melalui WhatsApp di nomor 085773023495 atau klik link ini: https://wa.me/6285773023495';
    }
    else if (message.includes('pengalaman') || message.includes('kerja')) {
        return 'Saya memiliki pengalaman lebih dari 15 tahun di bidang IT, termasuk sebagai Project Manager, System Analyst, dan Developer.';
    }
    else if (message.includes('kontak')) {
        return 'Anda bisa menghubungi saya melalui:\nWhatsApp: 085773023495\nEmail: arvinozulka@gmail.com\nLinkedIn: linkedin.com/in/arvino-zulka/';
    }
    else if (message.includes('proyek') || message.includes('project')) {
        return 'Saya telah menangani berbagai proyek besar termasuk implementasi Big Data, pengembangan E-Commerce, dan sistem eLearning.';
    }
    else if (message.includes('skill') || message.includes('keahlian')) {
        return 'Keahlian saya mencakup Big Data, Cloud Computing, IoT, AI, dan Cybersecurity.';
    }
    else {
        return 'Maaf, saya tidak mengerti pertanyaan Anda. Bisa diulangi dengan cara yang berbeda?';
    }
} 
} 