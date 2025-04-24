//멤버 클릭창
$('.profile-p').click(function(){
    $('.riize-briize-box').show();
    $('.member-profile-box').hide();
});

$('.member-profile li').click(function(){
    const member = $(this).data('member');
    $('.riize-briize-box').hide();
    $('.member-profile-box').hide();
    $('.' + member + '-box').show();
});

const params = new URLSearchParams(window.location.search);
const member = params.get('member');

if(member){
    $('.riize-briize-box').hide();
    $('.member-profile-box').hide();
    $('.' + member + '-box').show();
}


// 멤버 설명
const shotaro = {
    card_img: 'sub_photo/허그쇼타로.png',
    hover_img: 'sub_photo/느좋쇼타로.png',
    id: 'shotaro',
    name: '大﨑 将太郎 (오사키 쇼타로, Osaki Shotaro)',
    birth: '2000년 11월 25일 \n가나가와현 요코하마시',
    nationality: '일본',
    physical: '178cm | 62~63kg | A형 | 280mm',
    family: '아버지 오사키 켄타로, 어머니, \n여동생 <span>(2005년생)</span>, \n남동생 <span>(2012년생)</span>, \n반려견 초코',
    education: '대학교 (경제학/중퇴)',
    agency: 'SM엔터테인먼트',
    group: 'RIIZE',
    position: '댄서, 래퍼',
    career: 'NCT, NCT U <span>(2020.10.12 ~ 2023.05.24)</span>',
    debut: '2020년 10월 12일 NCT U \n2023년 9월 4일 RIIZE',
    nickname: '<strong>타로</strong>, <strong>수달</strong>, 강아지, 수달강아지, 쇼, 타로짱<span>(タロちゃん)</span>, 타로 버블티, 타로밀크티, 장태랑, 오타로, 광야 오씨, Fire Tornado Hector, 소달호, 수달호, 짱짱이, 쇼라에몽, Social Butterfly, 그사찍돼, 우팀쇼, 햄타로, 쇼뭉이, 쇼냥이, 쇼끼, 쇼카소',
    mbti: 'ESFP',
    emoji: '🧋',
    sign_img: 'sub_photo/쇼타로싸인.png'
}

const eunseok = {
    card_img: 'sub_photo/허그은석.png',
    hover_img: 'sub_photo/느좋은석.png',
    id: 'eunseok',
    name: '송은석 (宋恩奭, Song Eun-seok)',
    birth: '2001년 3월 19일 \n서울특별시 광진구 구의동',
    nationality: '대한민국',
    physical: '180cm | 59~60kg | AB형 | 260mm',
    first_name: '은진 송 (恩津 宋氏)',
    family: '아버지 송요한, 어머니, \n남동생 <span>(2015년생)</span>, 반려견 찰리',
    religion: '개신교',
    education: '서울구남초등학교 <span>(졸업)</span> \n광진중학교 <span>(졸업)</span> \n광남고등학교 <span>(중퇴)</span>',
    agency: 'SM엔터테인먼트',
    group: 'RIIZE',
    position: '보컬',
    debut: '2023년 9월 4일 RIIZE',
    nickname: '<strong>돌</strong>, 실버스톤, 송사리, 돌님, ㅅㅇㅅ, 송프, <strong>돌민용</strong>, ok, 은서기, 잭송, SES, <strong>블랙쉐도우</strong>, 은돌, 은석선배, 송동원, 구의동 민경훈, 송메치, 돌냥이',
    mbti: 'ISTP',
    emoji: '🪨',
    sign_img: 'sub_photo/은석싸인.png'
}

const sungchan = {
    card_img: 'sub_photo/허그성찬.png',
    hover_img: 'sub_photo/느좋성찬.png',
    id: 'sungchan',
    name: '정성찬(鄭成燦, Jung Sung-chan)',
    birth: '2001년 9월 13일 \n서울특별시 강남구 개포동',
    nationality: '대한민국',
    physical: '185.6cm | 75kg | A형 | 270mm \n글씨만 왼속 사용',
    family: '아버지 정석주, 어머니, \n형 <span>(1999년생)</span>, \n반려견 겨울',
    education: '서울구룡초등학교 <span>(졸업)</span> \n언북중학교 <span>(졸업)</span> \n청담고등학교 <span>(중퇴)</span> \n고등학교 졸업 학력 검정고시 <span>(합격)</span>',
    agency: 'SM엔터테인먼트',
    group: 'RIIZE',
    position: '래퍼',
    career: 'NCT, NCT U <span>(2020.10.12 ~ 2023.05.24)</span>',
    debut: '2020년 10월 12일 NCT U \n2023년 9월 4일 RIIZE',
    nickname: '<strong>진수성찬</strong>, <strong>밤비</strong>, 사슴, 왕눈 성찬, 치즈 걔, 디어 보이, 잼찬이, 아기 기린, 오렌지, 스포요정, 쿵쾅맨, <strong>일렉트로닉 제피르</strong>, 말벌 아저씨, 숑블리치, <strong>락밤</strong>',
    mbti: 'ESTP',
    emoji: '🐸',
    sign_img: 'sub_photo/성찬싸인.png'
}

const wonbin = {
    card_img: 'sub_photo/허그원빈.png',
    hover_img: 'sub_photo/느좋원빈.png',
    id: 'wonbin',
    name: '박원빈 (朴元彬, Park Won-bin)',
    birth: '2002년 3월 2일 \n서울특별시 성복구',
    hometown: '울산광역시 울주군 범서읍 천상리',
    nationality: '대한민국',
    physical: '176cm | 55~57kg | AB형 | 270mm',
    family: '아버지 박광훈, 어머니, \n형 <span>(2000년생)</span>',
    education: '으뜸과학유치원 <span>(수료)</span> \n천상초등학교 <span>(졸업)</span> \n울산스포츠과학중학교 <span>(전학)</span> \n천상중학교 <span>(졸업)</span> \n울산상업고등학교 <span>(중퇴)</span>',
    agency: 'SM엔터테인먼트',
    group: 'RIIZE',
    position: '<strong>센터</strong>, 보컬, 댄서',
    debut: '2023년 9월 4일 RIIZE',
    nickname: '원반이, <strong>깜고</strong>, <srtong>삐니</strong>, 락스타, 베이프남, 빅원빈, 빈욘세, 삔냥이, 울산 치타, 삔수종, <strong>토냥덕</strong>, 어깨괴물, <strong>암흑의 별 다크빈</strong>',
    mbti: 'INTJ',
    emoji: '🎸',
    sign_img: 'sub_photo/원빈싸인.png'
}

const sohee = {
    card_img: 'sub_photo/허그소희.png',
    hover_img: 'sub_photo/느좋소희.png',
    id: 'sohee',
    name: '이소희 (李炤煕, Lee So-hee)',
    birth: '2003년 11월 21일 \n경기도 시흥시 능곡동',
    nationality: '대한민국',
    physical: '174cm | 54~55kg | A형 | 265mm',
    family: '아버지 이형민, 어머니, \n큰누나 <span>(1999년생)</span>, \n작은누나 이지민 <span>(2001년생)</span>',
    education: '시흥능곡초등학교 <span>(졸업)</span> \n시흥능곡중학교 <span>(졸업)</span> \n시흥능곡고등학교 <span>(졸업)</span>',
    agency: 'SM엔터테인먼트',
    group: 'RIIZE',
    position: '<strong>메인 보컬</strong>',
    debut: '2023년 9월 4일 RIIZE',
    nickname: '<strong>또리</strong>, 끼끼, <strong>이요이</strong>, 초딩, <strong>어둠의 제왕 다크니스</strong>, 소루노 마스, 또냥이, 촌개, <strong>소희주</strong>, 오리고기',
    mbti: 'ISTP',
    emoji: '💂',
    sign_img: 'sub_photo/소희싸인.png'
}

const anton = {
    card_img: 'sub_photo/허그앤톤.png',
    hover_img: 'sub_photo/느좋앤톤.png',
    id: 'anton',
    name: 'Anton Chanyoung Lee (앤톤 찬영 리) \n이찬영 (李燦榮, Lee Chan-youn)',
    birth: ' 2004년 3월 21일 - 매사추세츠 주 보스턴',
    nationality: '대한민국 | 미국 복수국적',
    physical: '184cm | 65kg | O형 | 280mm',
    first_name: '경주 이씨(慶州 李氏)',
    family: '아버지 윤상, 어머니 심혜진, \n남동생 이준영 <span>(2009년생)</span>, 반려견 코코, 메이',
    education: 'Dwight-Englewood School <span>(중퇴)</span> \n고등학교 졸업 학력 검정고시 <span>(합격)</span> \nGED <span>(합격 여부 미공개)</span>',
    agency: 'SM엔터테인먼트',
    group: 'RIIZE',
    position: '보컬',
    debut: '2023년 9월 4일 RIIZE',
    nickname: '<strong>브라키오</strong>, 윤찬영, <strong>치유의 미카엘</strong>, <strong>앤또니</strong>, 최애의 아이, itboy, 자이언트 베이비, 수호천사, 슈퍼샤이 보이, 멍톤이, <srtong>멍룡이</strong>, 차녕이',
    mbti: 'INTP',
    emoji: '🦕',
    sign_img: 'sub_photo/앤톤싸인.png'
}

let members = [shotaro, eunseok, sungchan, wonbin, sohee, anton ]

function createProfileTable(member, fields, type){
    const table = document.createElement('table');
    table.classList.add('profile-table', type)

    for(const [key, label] of fields){
        if(member[key]){
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            const td = document.createElement('td');


            th.innerHTML = `<strong>${label}</strong>`;
            td.innerHTML = member[key].replace(/\n/g, '<br>');

            tr.appendChild(th);
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }

    return table;
}

document.addEventListener("DOMContentLoaded", function(){
    const fields1 = [
        ['name', '본명'],
        ['birth', '출생'],
        ['hometown', '출신'],
        ['nationality', '국적'],
        ['physical', '신체'],
        ['first_name', '본관'],
        ['family', '가족'],
    ];

    const fields2 = [
        ['religion', '종교'],
        ['education', '학력'],
        ['agency', '소속사'],
        ['group', '소속 그룹'],
        ['position', '포지션'],
        ['career', '그룹 경력'],
        ['debut', '데뷔'],
        ['nickname', '별명'],
        ['mbti', 'MBTI'],
        ['emoji', '이모지'],
    ];

    members.forEach(member => {
        const id = member.id;
        const container = document.getElementById(`${id}-profile`);
        if(!container) return;

        const img = document.createElement('img');
        img.src = member.card_img;
        img.alt = member.name;
        img.addEventListener("mouseenter", () => img.src = member.hover_img);
        img.addEventListener("mouseleave", () => img.src = member.card_img);
        img.classList.add('profile-img');

        const signImg = document.createElement('img');
        signImg.src = member.sign_img;
        signImg.alt = member.name + '싸인';
        signImg.classList.add('sign-img');

        const table1 = createProfileTable(member, fields1, 'table1');
        const table2 = createProfileTable(member, fields2, 'table2');

        container.appendChild(img);
        container.appendChild(table1);
        container.appendChild(table2);
        container.appendChild(signImg);
    });
});