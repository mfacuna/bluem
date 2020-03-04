import colors from '../../constants/colores';

const Styles = {
    container: {
        background: '#FFF',
        padding: 0
    },    
    brand: {
        color: colors.colorprimary4,
        fontSize: 30,
        border:"3px solid " + colors.colorprimary4,
        padding: 7,
        margin: 0,
        '&:hover': {
            backgroundColor: '#79B900',
            color: '#fff'
        },
    },
    navbar: {
        padding: 2,
        borderWidth:"0px 0px 2px 0px",
        borderStyle:"solid solid solid solid",
        borderColor:"#0a175a #091969 #8c2ece #2eb9ce",
    },
    navbarbrand: {
        padding: 4,
        borderWidth:"0px 0px 4px 4px",
        borderStyle:"solid solid solid solid",
        borderColor:"#0a175a #091969 #8c2ece #2eb9ce",
    },
    nav:{
        color: colors.colorprimary4,
        paddingLeft: 50,
        paddingRight: 50,
        marginLeft:10,
        marginRight:10,
        marginTop: 3,
        paddingTop: 3,
        '&:hover': {
            background: "red"
        },
    },
};

export default Styles