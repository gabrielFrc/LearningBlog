export const ChaptersBuilder = (chapters) => {
    // const chapters = [
    //     '#primeira-linguagem', '#aprendendo-java', '#mudando-para-dotnet',
    // ]

    window.addEventListener("popstate", () => {
        const currentHash = window.location.hash;
        chapters.forEach(element => {
            if(element === currentHash){
                const myElement = document.getElementById(currentHash);
                if(myElement != null){
                    myElement.scrollIntoView({ behavior: "smooth", block: "center"});
                }
            }
        });
    })
}