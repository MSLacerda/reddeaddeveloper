import React from 'react'
import {
    Component
} from 'react'


class Comments extends Component {
    constructor() {
        super();

        this.configVars();
    }

    configVars() {
        this.page = {};

        this.page.url = "https://rddeveloper.netlify.com";  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = "rddeveloper#4k12"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    }

    render() {
        const d = document, s = d.createElement('script');
        s.src = 'https://https-rddeveloper-netlify-com-1.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);

        return ( 
            <div id="disqus_thread"> </div>
        )
    }
}

export default Comments;
