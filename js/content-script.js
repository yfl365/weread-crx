main()
window.addEventListener('visibilitychange', function () {
    var num = 0
    var timer = setInterval(() => {
        num++
        main()
        if (num >= 100) {
            clearInterval(timer)
        }
    }, 16)
})
function main() {
    document.querySelector('.app_content').style.backgroundColor = '#f0e8d8'
}
