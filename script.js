document.addEventListener('DOMContentLoaded', function() {
    const taxInput = document.getElementById('tax-input');
    const countInput = document.getElementById('count-input');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultContainer = document.getElementById('result-container');
    const resultValue = document.getElementById('result-value');
    
    calculateBtn.addEventListener('click', function() {
        // دریافت مقادیر ورودی
        const tax = parseFloat(taxInput.value);
        const count = parseInt(countInput.value);
        
        // اعتبارسنجی ورودی‌ها
        if (isNaN(tax) || isNaN(count) || tax <= 0 || count <= 0) {
            alert('لطفاً مقادیر معتبر وارد کنید!');
            return;
        }
        
        // محاسبات
        const a = (tax * 10) / count;
        const mablagheVahed = a + ((3 * a) / 100);
        
        // نمایش نتیجه
        resultValue.textContent = mablagheVahed.toLocaleString('fa-IR');
        resultContainer.style.display = 'block';
        
        // اسکرول به نتیجه
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    });
    
    // امکان استفاده از کلید Enter
    [taxInput, countInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateBtn.click();
            }
        });
    });
});