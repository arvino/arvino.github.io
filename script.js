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

// Dark mode toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

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
    // Simple response logic
    message = message.toLowerCase();
    
    if (message.includes('halo') || message.includes('hi') || message.includes('hello')) {
        return 'Halo! Ada yang bisa saya bantu?';
    }
    else if (message.includes('pengalaman') || message.includes('kerja')) {
        return 'Saya memiliki pengalaman lebih dari 15 tahun di bidang IT, termasuk sebagai Project Manager, System Analyst, dan Developer.';
    }
    else if (message.includes('kontak') || message.includes('hubungi')) {
        return 'Anda bisa menghubungi saya melalui email: arvinozulka@gmail.com atau LinkedIn.';
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