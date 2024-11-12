import axios from 'axios';

const API_URL = import.meta.env.PUBLIC_API_URL || process.env.PUBLIC_API_URL || "http://localhost:3000/api";

console.log('API_URL', API_URL);

let cache = {};
setInterval(() => cache = {}, 2000);

export async function fetchAPI(path = '') {
    try {
        let start = new Date()
        if (!cache[path]) {
            let {data} = await axios.get(API_URL + path);
            cache[path] = data;
        }
        console.log(`${path} [${new Date() - start}ms]`)
        return cache[path]
    } catch (error) {
        throw `${API_URL}${path} [code] ${error.code} [message] ${error.message}`
    }
}

export async function getHeader() {
    try {
        return await fetchAPI('/globals/header?depth=1');
    } catch (error) {
        console.error(error);
    }
}

export async function getFooter() {
    try {
        return await fetchAPI('/globals/footer?depth=1');
    } catch (error) {
        console.error(error);
    }
}

export async function getSettings() {
    try {
        return await fetchAPI('/globals/settings?depth=1');
    } catch (error) {
        console.error(error);
    }
}

export async function getPages() {
    try {
        return await fetchAPI('/pages?where[status][equals]=published&depth=3&limit=1000');
    } catch (error) {
        console.error(error);
    }
}

export async function getPage(id) {
    try {
        return await fetchAPI(`/pages/${id}?depth=2`);
    } catch (error) {
        console.error(error);
    }
}

export async function getPageBySlug(slug) {
    try {
        let {docs} = await fetchAPI(`/pages?where[slug][equals]=${slug}&where[status][equals]=published&depth=2`);
        return docs?.[0]
    } catch (error) {
        console.error(error);
    }
}

export async function getLeftNavs() {
    try {
        return await fetchAPI('/leftnavs?where[status][equals]=published&depth=1');
    } catch (error) {
        console.error(error);
        return []
    }
}

export async function getFaq() {
    try {
        return await fetchAPI('/faq?where[status][equals]=published&depth=1&limit=1000&sort=sortOrder');
    } catch (error) {
        console.error(error);
        return []
    }
}