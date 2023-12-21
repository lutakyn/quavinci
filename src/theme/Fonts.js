const type = {
  base: 'Avenir-Book',
  italic: 'HelveticaNeue-Italic',
  Roboto: 'Roboto',
  normal: {
    fontFamily: 'Avenir-Book',
    fontWeight: 'normal',
  },
};

const size = {
  h1: 24,
  h2: 22,
  h3: 20,
  regular: 16,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.italic,
    fontSize: size.h3,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  light: {
    fontFamily: type.base,
    fontWeight: '500',
    color: '#999',
  },
};

const Fonts = {
  type,
  size,
  style,
};

export default Fonts;
