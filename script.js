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
        { name: '10.因信称义(5)认识自我', url: 'audio/10.因信称义（5）认识自我.mp3' }
    ];

    let currentPage = 1;
    const pageSize = 6;

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
