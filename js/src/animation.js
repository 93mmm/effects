const chars = "QAZWSXEDCRFVTGBYHNUJMIKOLP@#$%^&*";

export const Animations = {

    recoveringInscriptionAnimation: function (element) {
        for (let i = 0; i < element.length; i++) {
            let item = element.item(i)
            let originalWord = item.innerText;
            let interval = null;

            item.onmouseover = (event) => {
                clearInterval(interval);

                const word = originalWord;

                let iterations = 0;
                const max_iterations = word.length;

                interval = setInterval(() => {
                    let text = word.split("");

                    for (let j = iterations; j < max_iterations; j++)
                        text[j] = chars[Math.floor(Math.random() * 100) % chars.length];

                    event.target.innerText = text.join("");

                    if (iterations >= max_iterations)
                        clearInterval(interval);

                    iterations += 0.5;
                }, 50);
            }
        }
    }

}
