const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://random-quotes-freeapi.vercel.app/api/random";

async function getquote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        quote.innerHTML = data.quote;
        author.innerHTML = data.author;
    } catch (error) {
        quote.innerHTML = "An error occurred while fetching the quote.";
        author.innerHTML = "Please try again later.";
        console.error('Fetch error: ', error);
    }
}
getquote(api_url);

function tweet() {
    const tweetText = `${quote.innerHTML} ---- by ${author.innerHTML}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, "Tweet Window", "width=600,height=300");
}

function shareOnFacebook(){
    const fbUrl = "https://www.facebook.com/sharer/sharer.php?u=";
    const quoteText = encodeURIComponent(quote.innerHTML + " — " + author.innerHTML);
    window.open(fbUrl + quoteText, "Facebook Window", "width=600,height=300");
}

function shareOnWhatsApp() {
    const waUrl = "https://api.whatsapp.com/send?text=";
    const quoteText = encodeURIComponent(quote.innerHTML + " — " + author.innerHTML);
    window.open(waUrl + quoteText, "WhatsApp Window", "width=600,height=300");
}

function shareOnLinkedIn(){
    const liUrl = "https://www.linkedin.com/sharing/share-offsite/?url=";
    const quoteText = encodeURIComponent(quote.innerHTML + " — " + author.innerHTML);
    window.open(liUrl + quoteText, "LinkedIn Window", "width=600,height=300");
}

function shareOnQuora(){
    const quoraUrl = "https://www.quora.com/share?url=";
    const quoteText = encodeURIComponent(quote.innerHTML + " — " + author.innerHTML);
    window.open(quoraUrl + quoteText, "Quora Window", "width=600,height=300");
}