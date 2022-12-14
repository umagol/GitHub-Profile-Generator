import colors from "assets/theme/base/colors";

const { transparent } = colors;

const iconButtons =  {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};
export default iconButtons;