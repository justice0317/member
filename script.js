
// 大頭貼上傳功能
const profileInput = document.getElementById('profile-picture');
const profileCircle = document.querySelector('.circle');

profileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileCircle.style.backgroundImage = `url(${e.target.result})`;
            profileCircle.style.backgroundSize = 'cover';
            profileCircle.style.backgroundPosition = 'center';
            profileCircle.style.color = 'transparent'; // 隱藏提示文字
        };
        reader.readAsDataURL(file);
    }
});

// 確認按鈕點擊功能
document.querySelectorAll('.btn-confirm').forEach((button, index) => {
    button.addEventListener('click', () => {
        let inputField;
        if (index === 0) {
            inputField = document.getElementById('username').value;
            console.log(`新使用者名稱：${inputField}`);
        } else if (index === 1) {
            inputField = document.getElementById('email').value;
            console.log(`新電子郵件：${inputField}`);
        } else if (index === 2) {
            inputField = document.getElementById('password').value;
            console.log(`新密碼：${inputField}`);
        }
        alert('更改已提交！');
    });
});
