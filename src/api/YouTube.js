import axios from "axios";

const KEY = 'AIzaSyAVL2GO5NltpvgD7VbAXWBmtxulW8r3BB8';

export default axios.create({baseURL: 'https://www.googleapis.com/youtube/v3',
                            params:{part: 'snippet', maxResults: 5, key:KEY}
});      