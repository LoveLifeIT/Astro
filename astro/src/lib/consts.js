

export const colors = {
    tan: {
        value: "tan",
        label: "Tan",
        hex: '#E9DFD6',
    },
    primaryGreen:{
        value: "primaryGreen",
        label: "Primary Green",
        hex: '#386f38',
    },
    darkGreen: {
        value: "darkGreen",
        label: "Dark Green",
        hex: '#343823',
    },
    brown: {
        value: "brown",
        label: "Brown",
        hex: '#534741',
    },
    grey: {
        value: "grey",
        label: "Grey",
        hex: '#E6E6E6',
    },
    white: {
        value: "white",
        label: "White",
        hex: '#FFFFFF',
    },
    black: {
        value: "black",
        label: "black",
        hex: '#000000',
    },
    secondaryLightGreen: {
        value: "secondaryLightGreen",
        label: "Secondary Light Green",
        hex: '#CEE299',
    },
    secondaryPurple: {
        value: "secondaryPurple",
        label: "Secondary Purple",
        hex: '#9291BB',
    },
    secondaryDarkPurple: {
        value: "secondaryDarkPurple",
        label: "Secondary Dark Purple",
        hex: '#474695',
    },
    secondaryYellow: {
        value: "secondaryYellow",
        label: "Secondary Yellow",
        hex: '#F7C926',
    },
    secondaryRed: {
        value: "secondaryRed",
        label: "Secondary Red",
        hex: '#E3612D',
    },
    gradientOrange: {
        hex: '#E3612D',
        linearGradient: 'linear-gradient(90deg, #E3612D 0%, #F7C926 100%)',
    }
}

export const heights = [
    {
        value: "default",
        label: "Hug Content (default)",
    },
    {
        value: "200px",
        label: "200px",
    },
    {
        value: "400px",
        label: "400px",
    },
    {
        value: "800px",
        label: "800px",
    },
    {
        value: "1200px",
        label: "1200px",
    },
]

export function getColors() {
	return colors;
}

export function getModuleHeights() {
	return heights;
}
	

