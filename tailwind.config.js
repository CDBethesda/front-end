module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          50: "#F7FAFC",
          60: "#5A5C60",
          70: "#B7B9BC",
          80: "#9FA1A5"
        },
        // primary
        green: {
          50: "#38B2AC",
          100: "#E6FFFA",
          300: "#81E6D9",
          400: "#4FD1C5",
          500: "#38B2AC",
          600: "#319795"
        },
        accentSuccess: {
          100: "#F0FFF4",
          200: "#C6F6D5",
          400: "#68D391",
          500: "#48BB78",
          600: "#38A169",

        },
        accentSecondary: {
          100: "#FFF5F5",
          300: "#FEB2B2",
          500: "#F56565",

        },
        accentInformation: {
          500: "#4299E1",
          600: "#3182CE",
        },
        accentWarning: {
          200: "#FEFCBF",
          300: "#FAF089",
          500: "#ECC94B",
          600: "#D69E2E",
        },
        accentError: {
          200: "#FEFCBF",
          600: "#DD6B20",
        },
        red: {
          100: "#FFF5F5",
          400: "#FC8181",
          600: "#E53E3E"
        },
        primary: {
          100: "#FFF0F1",
          700: "#BE1027"
        },
        tertiary: {
          20: "#F7F8F9",
          50: "#B1B5BA",
          80: "#2E3032",
          100: "#F7FAFC",
          200: "#EDF2F7",
          300: "#E2E8F0",
          400: "#CBD5E0",
          500: "#A0AEC0",
          600: "#718096",
          700: "#4A5568",
          900: "#1A202C",
        }
      },
      width: {
        "1/13": "35.3333%",
        "2/13": "19%",
        "3/13": "21%",
        "4/13": "78%",
        "5/13": "97.65%",
        "4.5": "1.125rem",
        "100": "35rem",
        "ppict": "11.07rem",
        "11.5": "3.25rem",
        
      },
      minWidth: {
        "1/13": "35.3333%",
        "2/13": "19%",
        "3/13": "21%",
        "4.5": "1.125rem",
        "100": "35rem",
        "ppict": "11.07rem",
      },
      maxWidth: {
        "1/13": "35.3333%",
        "2/13": "19%",
        "3/13": "21%",
        "4.5": "1.125rem",
        "100": "35rem",
        "ppict": "11.07rem",
      },
      height: {
        "4.5": "1.125rem",
        "82": "21.125rem",
        "97": "31.25rem",
        "98": "28.125rem",
        "phead": "21.85rem",
        "pbanner": "16.85rem",
        "ppict": "11.07rem",
        "11.5": "3.25rem",
      },
      minHeight : {
        "4.5": "1.125rem",
        "82": "21.125rem",
        "97": "31.25rem",
        "98": "28.125rem",
        "phead": "21.85rem",
        "ppict": "11.07rem",
      },
      maxHeight : {
        "4.5": "1.125rem",
        "82": "21.125rem",
        "97": "31.25rem",
        "98": "28.125rem",
        "phead": "21.85rem",
        "ppict": "11.07rem",
      },
      spacing: {
        "1/5": "47.533%",
        "ppicttop": "8rem",
        "ppicleft": "3rem",
        "ppict": "11.07rem",
      },
      zIndex: {
        '5': '5',
        '60': '60',
      },
      gridTemplateColumns: {
        "profile": '17.85rem 1fr',
        "presencecard" : '1fr 5rem',
      },
      gridTemplateRows: {
        "profile": '5.35rem 1fr',
        "presencecard" : '1fr 5rem',
      },
      borderRadius: {
        "ballon": "2rem",
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      boxShadow: {
        'e0': '0px 0px 0px 2px #EEAFAF',
        'e1': '0px 1px 0px rgba(0, 0, 0, 0.05)',
        'e2': '0px 1px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)',
        'e3': '0px 2px 10px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.2)',
        'e4': '0px 4px 20px rgba(0, 0, 0, 0.15), 0px 0px 3px rgba(0, 0, 0, 0.1)',
        'e5': '0px 8px 40px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: []
};
