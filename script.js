document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const fileList = document.getElementById('file-list');
    const pagination = document.getElementById('pagination');
    const playPauseButton = document.getElementById('play-pause');
    const fastForwardButton = document.getElementById('fast-forward');
    const downloadButton = document.getElementById('download');
    const speedSelect = document.getElementById('speed');

    const audioFiles = [
        // 示例文件，可以替换为动态获取
        { name: '1.愚拙的童女', url: 'audio/1愚拙的童女.mp3' },
        { name: '2.聪明的童女', url: 'audio/2聪明的童女.mp3' },
        { name: '3.第一位天使的信息', url: 'audio/3.第一位天使的信息.mp3' },
        { name: '4.第二位天使的信息', url: 'audio/4.第二位天使的信息.mp3' },
        { name: '5.第三位天使的信息', url: 'audio/5.第三位天使的信息.mp3' },
        { name: '6.因信称义(1)上帝宝贵的应许', url: 'audio/6.因信称义（1）上帝宝贵的应许.mp3' },
        { name: '7.因信称义(2)基督的功劳是我们唯一的希望', url: 'audio/7.因信称义（2 ）基督的功劳是我们唯一的希望.mp3' },
        { name: '8.因信称义(3)基督是赐生命的主', url: 'audio/8.因信称义（3）基督是赐生命的主.mp3' },
        { name: '9.因信称义(4)不依靠自己的功劳', url: 'audio/9.因信称义（4）不是依靠自己的功劳.mp3' },
        { name: '10.因信称义(5)认识自我', url: 'audio/10.因信称义（5）认识自我.mp3' },
        { name: '11.因信称义(4)不依靠自己的功劳,', url: 'audio/11.因信称义（4）不是依靠自己的功劳.mp3' },
        { name: '12.因信称义(5)认识自我', url: 'audio/12.因信称义（5）认识自我.mp3' },
        { name: '13.得救的经验(1)', url: 'audio/13.得救的经验(1).mp3' },
        { name: '14.得救的经验(2)', url: 'audio/14.得救的经验(2).mp3' },
        { name: '15.基督论重生(1)', url: 'audio/15.基督论重生1(1).mp3' },
        { name: '16.基督论重生(2)', url: 'audio/16.基督论重生(2).mp3' },
        { name: '17.真实的悔改', url: 'audio/17.真实的悔改.mp3' },
        { name: '18.你们应当悔改', url: 'audio/18.你们应当悔改.mp3' },
        { name: '19.上帝国度的根基', url: 'audio/19.上帝国度的根基.mp3' },
        { name: '20.真悔改', url: 'audio/20.真悔改.mp3' },
        { name: '21.十字架的苦难(1)', url: 'audio/21.十字架的苦难(1).mp3' },
        { name: '22.十字架的苦难(2)', url: 'audio/22.十字架的苦难(2).mp3' },
        { name: '23.因信称义的定义', url: 'audio/23.因信称义的定义.mp3' },
        { name: '24.因信称义的前提', url: 'audio/24.因信称义的前提.mp3' },
        { name: '25.要先求他的义', url: 'audio/25.要先求他的义.mp3' },
        { name: '26.人有没有一点义', url: 'audio/26.人有没有一点义.mp3' },
        { name: '27.得救的第一步', url: 'audio/27.得救的第一步.mp3' },
        { name: '28.得救的唯一道路', url: 'audio/28.得救的唯一道路.mp3' },
        { name: '29.因信称义的经验(一)', url: 'audio/29.因信称义的经验(一).mp3' },
        { name: '30.因信称义的经验(二)', url: 'audio/30.因信称义的经验(二).mp3' },
        { name: '31.因信称义的经验(三)', url: 'audio/31.因信称义的经验(三).mp3' },
        { name: '32.仰望十字架的经验', url: 'audio/32.仰望十字架的经验.mp3' },
        { name: '33.重生的凭据', url: 'audio/33.重生的凭据.mp3' },
        { name: '34.称义后要受洗', url: 'audio/34.称义后要受洗.mp3' },
        { name: '35.受洗的意义(1)', url: 'audio/35.受洗的意义(1).mp3' },
        { name: '36.受洗的意义(2)', url: 'audio/36.受洗的意义(2).mp3' },
        { name: '37.真正的“信而受洗"', url: 'audio/37.真正的“信而受洗”.mp3' },
        { name: '38.伟大的牺牲(上)"', url: 'audio/38.伟大的牺牲(上).mp3' },
        { name: '39.伟大的牺牲(下)"', url: 'audio/39.伟大的牺牲(下).mp3' },
        { name: '40.两种约', url: 'audio/40.两种约.mp3' },
        { name: '41.两种律法', url: 'audio/41.两种律法.mp3' },
        { name: '42.上帝的真子民', url: 'audio/42.上帝的真子民.mp3' },
        { name: '43.上帝的爱', url: 'audio/43.上帝的爱.mp3' },
        { name: '44.一条新命令', url: 'audio/44.一条新命令.mp3' },
        { name: '45.忠诚上帝的记号(上)', url: 'audio/45.忠诚上帝的记号(上).mp3' },
        { name: '46.忠诚上帝的记号（下', url: 'audio/46.忠诚上帝的记号（下）.mp3' },
        { name: '47.试验的标记', url: 'audio/47.试验的标记.mp3' },
        { name: '48.记念上帝创造的标记(一)', url: 'audio/48.记念上帝创造的标记(一).mp3' },
        { name: '49.记念上帝创造的标记(二)', url: 'audio/49.记念上帝创造的标记(二).mp3' },
        { name: '50.受水和圣灵的洗', url: 'audio/50.受水和圣灵的洗.mp3' },
        { name: '51.属血气的和属灵的', url: 'audio/51.属血气的和属灵的.mp3' },
        { name: '52.未来的荣耀(1)', url: 'audio/52.未来的荣耀(1).mp3' },
        { name: '53.未来的荣耀(2)', url: 'audio/53.未来的荣耀（2）.mp3' },
        { name: '54.海中上来的兽', url: 'audio/54.海中上来的兽.mp3' },
        { name: '55.兽像', url: 'audio/55.兽像.mp3' },
        { name: '56.十四万四千人', url: 'audio/56.十四万四千人.mp3' },
        { name: '57.当记念的日子', url: 'audio/57.当记念的日子.mp3' },
        { name: '58.成为补破口的', url: 'audio/58.成为补破口的.mp3' },
        { name: '59.大淫妇和兽', url: 'audio/59.大淫妇和兽.mp3' },
        { name: '60.福音的中心', url: 'audio/60.福音的中心.mp3' },
    ];


    let currentPage = 1;
    const pageSize = 15;

    const renderFiles = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const filesToShow = audioFiles.slice(startIndex, endIndex);

        fileList.innerHTML = '';
        filesToShow.forEach(file => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${file.name}</span>
                <button data-url="${file.url}" class="play-btn">播放</button>
            `;
            fileList.appendChild(li);
        });

        renderPagination();
    };

    const renderPagination = () => {
        const pageCount = Math.ceil(audioFiles.length / pageSize);
        pagination.innerHTML = '';

        for (let i = 1; i <= pageCount; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.disabled = i === currentPage;
            btn.addEventListener('click', () => {
                currentPage = i;
                renderFiles();
            });
            pagination.appendChild(btn);
        }
    };

    fileList.addEventListener('click', e => {
        if (e.target.classList.contains('play-btn')) {
            const url = e.target.getAttribute('data-url');
            player.src = url;
            player.play();
        }
    });

    playPauseButton.addEventListener('click', () => {
        if (player.paused) player.play();
        else player.pause();
    });

    fastForwardButton.addEventListener('click', () => {
        player.currentTime += 10;
    });

    downloadButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = player.src;
        link.download = player.src.split('/').pop();
        link.click();
    });

    speedSelect.addEventListener('change', () => {
        player.playbackRate = parseFloat(speedSelect.value);
    });

    renderFiles();
});
