import { colors } from "./consts.js";

export function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

export function genBackgroundImageStyle(url) {
    return url && ` background-image: url('${url}') `;
}

export function normalizeURL(link) {

    if (link.link.type === "reference") {
        link.link.url = link.link.reference.value.slug;
        //link.link.label = link.link.reference.value.title;
    }
}

export function normalizeSingleLinkURL(link) {
    
    if (link.href === null) {
        link.href = link.internalPage.value.slug;
        //link.link.label = link.link.reference.value.title;
    }
}

export function createSectionStyle(layout) {

    let styles = []

    let backgroundImageUrl = pickImageSrc(layout.backgroundImage)
    if (backgroundImageUrl) styles.push(`background-image: url('${backgroundImageUrl}')`)

    if (layout?.backgroundColor) {
        let color = colors[layout.backgroundColor];
        if (color?.hex) styles.push(`background-color: ${color.hex}`)
        if (color?.linearGradient) styles.push(`background: ${color.linearGradient}`);
    }

    if (layout?.textColor) styles.push(`color: ${resolveColor(layout.textColor)}`)

    return styles.join('; ')
}

export function createBlockStyle(block, layout=null) {

    let styles = []

    let backgroundImageUrl = pickImageSrc(block.backgroundImage)
    if (backgroundImageUrl) styles.push(`background-image: url('${backgroundImageUrl}')`)

    if (block?.backgroundColor) {
        let color = colors[block.backgroundColor];
        if (color?.hex) styles.push(`background-color: ${color.hex}`)
        if (color?.linearGradient) styles.push(`background: ${color.linearGradient}`);
    }

    if (block?.textColor) styles.push(`color: ${resolveColor(block.textColor)}`)

    if (layout?.height) styles.push(`min-height: ${layout.height}`)

    return styles.join('; ')
}

export function resolveColor(value) {
    let color = colors[value];
    return color?.hex || 'inherit';
}

export function pickAvatarSrc(media) {
    return (
        media?.sizes?.avatar?.url ||
        media?.sizes?.thumbnail?.url ||
        media?.sizes?.medium?.url ||
        media?.sizes?.large?.url ||
        media?.sizes?.full?.url ||
        media?.url ||
        "");
}

export function pickHref(link) {
    if (!link) return '';
    if (link.type === "reference") return link.internalPage?.value?.slug || link.reference?.value?.slug
     return link.href || link.url || '';
}

export function pickThumbnailSrc(image) {
    return (
        isImage(image) &&
        image?.sizes?.thumbnail?.url ||
        image?.sizes?.medium?.url ||
        image?.sizes?.large?.url ||
        image?.sizes?.full?.url ||
        image?.url ||
        "");
}

export function pickImageSrc(media) {
    let url = (
        isImage(media) &&
        media?.sizes?.full?.url ||
        media?.sizes?.large?.url ||
        media?.sizes?.medium?.url ||
        media?.url ||
        "");

    return url;
}
export function pickGalleryImageSrc(media) {
    let url = (
        isImage(media) &&
        media?.sizes?.full?.url ||
        media?.sizes?.large?.url ||
        media?.url ||
        media?.sizes?.medium?.url ||
        "");

    return url;
}

export function pickCarouselImageSrc(media) {
    let url = (
        isImage(media) &&
        media?.sizes?.medium?.url ||
        media?.sizes?.small?.url ||
        media?.sizes?.large?.url ||
        media?.sizes?.full?.url ||
        media?.sizes?.thumbnail?.url ||
        media?.url ||
        "");

    return url;
}

export function isNewTab(link) {
    return (link?.newTab) ? "true" : "false";
}

export function pickTarget(link) {
    return (link.external || link.newTab) ? "_blank" : "_self";
}

export function isVideo(media) {
    return media?.mimeType?.startsWith('video')
}

export function isImage(media) {
    return media?.mimeType?.startsWith('image')
}

export function hasBackgroundVideo(block) {
    return isVideo(block.backgroundImage)
}

export function debug(value) {
    console.log(value)
}

export function hasContent(value) {
    if (!value) return false;
    let clean = value.replace(/<p>\s*<\/p>/g, '').trim(); // Remove all empty p tags, even with whitespace
    return clean.length > 0; // Explicitly return a boolean
}

export function groupFaqsByTag(faqs) {
    if (!faqs.length) return []
    let grouped = {}
    faqs.forEach(faq => {
        faq.tags.forEach(tag => {
            let key = tag.name || 'General';
            if (!grouped[key]) grouped[key] = []
            grouped[key].push(faq)
        })
    })
    return grouped
}

export function hasModal(slide){ return slide?.onClick === 'useModal'; }

