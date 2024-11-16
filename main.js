// 检查是否在指定页面
if (window.location.href !== "https://creator.douyin.com/creator-micro/data/following/following") {
    alert("请先前往 抖音创作服务平台\n(https://creator.douyin.com/creator-micro/data/following/following)\n再执行此脚本");
} else {
    const SafeListUser = ["一颗肉丸子","丸子的男管家","狂躁土豆"]//Example

    function NextPage(pages) {
    let currentPage = 0;

    function clickNext() {
        const nextButton = document.getElementsByClassName("semi-icons semi-icons-chevron_right semi-icons-default")[0];
        if (nextButton) {
            nextButton.parentNode.click();
            currentPage++;
            console.log(`翻到第 ${currentPage} 页`);

            if (currentPage < pages) {
                setTimeout(clickNext, 2000); // 每次点击后等待2秒，再翻页
            } else {
                console.log("已完成所有翻页操作");
            }
        } else {
            console.error("找不到翻页按钮，翻页操作中止");
        }
    }

    clickNext(); // 开始翻页
}


    function Unfllow_ThisPage() {
        const Content = document.getElementsByClassName("semi-table-tbody");
        if (Content.length === 0 || Content[0].childNodes.length === 0) {
            console.log("页面尚未完全加载，等待下次尝试...");
            return;
        }

        for (let n of Content[0].childNodes) {
            function _cli() {
                const usr_name = n.firstChild.childNodes[1].innerHTML;
                const unfllow_btn = n.childNodes[2].firstChild;
                if (SafeListUser.indexOf(usr_name) !== -1) {
                    console.log(`跳过 ${usr_name}`);
                } else {
                    console.log(`正在取关 ${usr_name}`);
                    unfllow_btn.click();
                    document.getElementsByClassName("buttons--wuLtP")[0].childNodes[1].click(); // 确认取消
                }
            }
            setTimeout(_cli, 500); // 0.5秒点击取关
        }
    }

    // 每隔3秒运行一次 Unfllow_ThisPage 函数，并翻页
    setInterval(() => {
        console.log("每隔3秒尝试运行一次取关操作并翻页...");
        Unfllow_ThisPage();
        setTimeout(() => {
            //NextPage(1); // 翻到下一页
			
        }, 1000); // 确保取关操作完成后再翻页
    }, 50000); // 50秒间隔
}
