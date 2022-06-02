let textLength = 0;
let text = 'Our story is about a town, a small town, and the people who live in the town. From a distance, it presents itself like so many other small towns all over the world... Safe. Decent. Innocent. Get closer, though, and you start seeing the shadows underneath. The name of our town is Riverdale. And our story begins, I guess, with what the Blossom twins did this summer. On the Fourth of July, just after dawn, Jason and Cheryl Blossom drove out to Sweetwater River for an early morning boat ride. The next thing we know happened for sure is that Dilton Doiley, who was leading Riverdale boys Scout Troop on a bird watching expedition, came upon Cheryl by the river edge. Riverdale Police dragged Sweetwater River for Jason body, but never found it. So a week later, the Blossom family buried an empty casket and Jason death was ruled an accident, as the story that Cheryl told made the rounds. That Cheryl dropped a glove in the water, and Jason reached down to get it, and accidentally tipped the boat, and panicked, and drowned. As for us, we were still talking about the "July Fourth tragedy" on the last day of summer vacation, when a new mystery rolled into town. '
function type() {
    let textChar = text.charAt(textLength++);
    let paragraph = document.getElementById("typed");
    let charElement = document.createTextNode(textChar);
    paragraph.appendChild(charElement);
    if(textLength < text.length+1) {
        setTimeout('type()', 50);
    } else {
        text = '';
    }
} 
