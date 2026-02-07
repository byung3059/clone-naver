document.addEventListener('DOMContentLoaded', () => {
    // Search Focus Effect
    const searchInput = document.getElementById('query');
    const searchForm = document.getElementById('search_form');

    searchInput.addEventListener('focus', () => {
        searchForm.style.borderColor = '#03cf5d'; // Keep green
        searchForm.style.boxShadow = '0 4px 10px rgba(3, 207, 93, 0.2)';
    });

    searchInput.addEventListener('blur', () => {
        searchForm.style.borderColor = '#03cf5d'; // Reset if needed
        searchForm.style.boxShadow = 'none';
    });

    // Tab Switching Logic
    const tabs = document.querySelectorAll('.tab_item');
    const cardTitle = document.querySelector('.card_title');
    const cardDesc = document.querySelector('.card_desc');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent jump

            // Remove active class from all
            tabs.forEach(t => t.classList.remove('on'));

            // Add active class to clicked
            tab.classList.add('on');

            // Update content (Simulation)
            const category = tab.textContent.trim();
            updateContent(category);
        });
    });

    function updateContent(category) {
        // Simple content simulation based on category
        switch (category) {
            case '엔터':
                cardTitle.innerText = '오늘의 추천 컨텐츠';
                cardDesc.innerText = '흥미로운 연예 기사를 확인해보세요.';
                break;
            case '스포츠':
                cardTitle.innerText = '실시간 스포츠 뉴스';
                cardDesc.innerText = '야구, 축구, 농구 등 다양한 스포츠 소식.';
                break;
            case '자동차':
                cardTitle.innerText = '신차 시승기';
                cardDesc.innerText = '최신 자동차 트렌드와 시승기를 만나보세요.';
                break;
            case '웹툰':
                cardTitle.innerText = '인기 웹툰 업데이트';
                cardDesc.innerText = '마음의 소리, 호랑이형님 등 인기작 연재.';
                break;
            case '경제':
                cardTitle.innerText = '증시 동향 확인';
                cardDesc.innerText = '코스피, 코스닥 지수와 환율 정보를 확인하세요.';
                break;
            case '추천·구독':
                cardTitle.innerText = '나만을 위한 추천';
                cardDesc.innerText = '사용자 취향에 맞는 컨텐츠를 추천합니다.';
                break;
            case '레시피':
                cardTitle.innerText = '오늘의 요리';
                cardDesc.innerText = '쉽고 맛있는 백종원 레시피 모음.';
                break;
            case '리빙':
                cardTitle.innerText = '인테리어 꿀팁';
                cardDesc.innerText = '작은 방 넓게 쓰는 인테리어 노하우.';
                break;
            default:
                cardTitle.innerText = '컨텐츠 로딩 중...';
                cardDesc.innerText = '';
        }
    }
});
