# **LinkSentry** 🔗🛡️  
![Version](https://img.shields.io/badge/version-1.0-blue)
🔒 Protect your users from unsafe redirects

## 📌 **Overview**  
**LinkSentry** is a lightweight and secure plugin that protects users from uncontrolled external redirects. It intercepts outbound links and displays a warning page before leaving your site, preventing phishing attacks and malicious redirections.  

✅ **Smart link filtering** (customizable whitelist)  
✅ **Protection against phishing and forced redirects**  
✅ **Customizable countdown before redirection**  




## 🚀 **Installation**  

### 📂 **Clone the project**  
```sh
git clone https://github.com/Marcucus0/LinkSentry.git
```

### 1️⃣ **Add LinkSentry to your project**  
Include this script in your **HTML** (before `</body>`) :  
```html
<script src="linksentry.js"></script>
```

### 2️⃣ **Configuration (optional)**  
In your **HTML** file, set your preferences:  
```html
<script>
    window.RedirectorConfig = {
        whitelist: ["twitter.com", "github.com"], // Allowed domains
        countdown: 5, // Time before redirection (0 = disabled)
    };
</script>
```
The countdown has a minimum duration of 5 seconds. If a lower value is set, it will be disabled

## 🎯 **How does it work?**  

1️⃣ A user clicks on an **external link** 🚀  
2️⃣ **LinkSentry** checks if the link is allowed (whitelist) ✅  
3️⃣ If the link is unknown, a **warning page** is displayed ⚠️  
4️⃣ The user can confirm or cancel the redirection ✋  
5️⃣ If **countdown** is enabled, redirection happens automatically after X seconds ⏳  

![Capture d'écran 2025-03-04 020610](https://github.com/user-attachments/assets/a9847740-9050-4829-9ba9-bafad865d5e2)
