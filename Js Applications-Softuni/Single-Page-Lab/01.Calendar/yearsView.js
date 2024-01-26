const MONTHS = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12,
}


export function loadYearsView() {
    const yearsSection = document.querySelector('#years');
    yearsSection.addEventListener('click', (e) => {
    if (e.target.tagName === "TD") {
        const currentYear = e.target.textContent.trim();
        const yearSection = document.getElementById(`year-${currentYear}`);
        yearsSection.style.display='none';
        yearSection.style.display='block';
        yearSection.addEventListener('click', (e) => {
            if(e.target.tagName === "TD") {
                const currentMonth = e.target.textContent.trim();
                const monthSection = document.getElementById(`month-${currentYear}-${MONTHS[currentMonth]}`)
                yearSection.style.display='none';
                monthSection.style.display='block';
            }
        })
        }
    })
}

