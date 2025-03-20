function encrypt() {
    const input = document.querySelector(".password-input").value;
    const x = 31;
    const mod = 1000000007;
    let hash = 0;

    for (let i = 0; i < input.length; i++) {
        let asciiValue = input.charCodeAt(i);
        hash = (hash * x + asciiValue) % mod;
    }

    document.querySelector(".hash").innerText = hash;
}