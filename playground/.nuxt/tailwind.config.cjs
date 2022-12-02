module.exports = {
  "theme": {
    "fontFamily": {
      "main": [
        "Poppins",
        "sans-serif"
      ]
    },
    "typography": {
      "DEFAULT": {
        "css": [
          {
            "color": "var(--tw-prose-body)",
            "maxWidth": "65ch",
            "[class~=\"lead\"]": {
              "color": "var(--tw-prose-lead)"
            },
            "a": {
              "color": "var(--tw-prose-links)",
              "textDecoration": "underline",
              "fontWeight": "500"
            },
            "strong": {
              "color": "var(--tw-prose-bold)",
              "fontWeight": "600"
            },
            "a strong": {
              "color": "inherit"
            },
            "blockquote strong": {
              "color": "inherit"
            },
            "thead th strong": {
              "color": "inherit"
            },
            "ol": {
              "listStyleType": "decimal"
            },
            "ol[type=\"A\"]": {
              "listStyleType": "upper-alpha"
            },
            "ol[type=\"a\"]": {
              "listStyleType": "lower-alpha"
            },
            "ol[type=\"A\" s]": {
              "listStyleType": "upper-alpha"
            },
            "ol[type=\"a\" s]": {
              "listStyleType": "lower-alpha"
            },
            "ol[type=\"I\"]": {
              "listStyleType": "upper-roman"
            },
            "ol[type=\"i\"]": {
              "listStyleType": "lower-roman"
            },
            "ol[type=\"I\" s]": {
              "listStyleType": "upper-roman"
            },
            "ol[type=\"i\" s]": {
              "listStyleType": "lower-roman"
            },
            "ol[type=\"1\"]": {
              "listStyleType": "decimal"
            },
            "ul": {
              "listStyleType": "disc"
            },
            "ol > li::marker": {
              "fontWeight": "400",
              "color": "var(--tw-prose-counters)"
            },
            "ul > li::marker": {
              "color": "var(--tw-prose-bullets)"
            },
            "hr": {
              "borderColor": "var(--tw-prose-hr)",
              "borderTopWidth": 1
            },
            "blockquote": {
              "fontWeight": "500",
              "fontStyle": "italic",
              "color": "var(--tw-prose-quotes)",
              "borderLeftWidth": "0.25rem",
              "borderLeftColor": "var(--tw-prose-quote-borders)",
              "quotes": "\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\""
            },
            "blockquote p:first-of-type::before": {
              "content": "open-quote"
            },
            "blockquote p:last-of-type::after": {
              "content": "close-quote"
            },
            "h1": {
              "color": "var(--tw-prose-headings)",
              "fontWeight": "800"
            },
            "h1 strong": {
              "fontWeight": "900",
              "color": "inherit"
            },
            "h2": {
              "color": "var(--tw-prose-headings)",
              "fontWeight": "700"
            },
            "h2 strong": {
              "fontWeight": "800",
              "color": "inherit"
            },
            "h3": {
              "color": "var(--tw-prose-headings)",
              "fontWeight": "600"
            },
            "h3 strong": {
              "fontWeight": "700",
              "color": "inherit"
            },
            "h4": {
              "color": "var(--tw-prose-headings)",
              "fontWeight": "600"
            },
            "h4 strong": {
              "fontWeight": "700",
              "color": "inherit"
            },
            "img": {},
            "figure > *": {},
            "figcaption": {
              "color": "var(--tw-prose-captions)"
            },
            "code": {
              "color": "var(--tw-prose-code)",
              "fontWeight": "600"
            },
            "code::before": {
              "content": "\"`\""
            },
            "code::after": {
              "content": "\"`\""
            },
            "a code": {
              "color": "inherit"
            },
            "h1 code": {
              "color": "inherit"
            },
            "h2 code": {
              "color": "inherit"
            },
            "h3 code": {
              "color": "inherit"
            },
            "h4 code": {
              "color": "inherit"
            },
            "blockquote code": {
              "color": "inherit"
            },
            "thead th code": {
              "color": "inherit"
            },
            "pre": {
              "color": "var(--tw-prose-pre-code)",
              "backgroundColor": "var(--tw-prose-pre-bg)",
              "overflowX": "auto",
              "fontWeight": "400"
            },
            "pre code": {
              "backgroundColor": "transparent",
              "borderWidth": "0",
              "borderRadius": "0",
              "padding": "0",
              "fontWeight": "inherit",
              "color": "inherit",
              "fontSize": "inherit",
              "fontFamily": "inherit",
              "lineHeight": "inherit"
            },
            "pre code::before": {
              "content": "none"
            },
            "pre code::after": {
              "content": "none"
            },
            "table": {
              "width": "100%",
              "tableLayout": "auto",
              "textAlign": "left",
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "thead": {
              "borderBottomWidth": "1px",
              "borderBottomColor": "var(--tw-prose-th-borders)"
            },
            "thead th": {
              "color": "var(--tw-prose-headings)",
              "fontWeight": "600",
              "verticalAlign": "bottom"
            },
            "tbody tr": {
              "borderBottomWidth": "1px",
              "borderBottomColor": "var(--tw-prose-td-borders)"
            },
            "tbody tr:last-child": {
              "borderBottomWidth": "0"
            },
            "tbody td": {
              "verticalAlign": "baseline"
            },
            "tfoot": {
              "borderTopWidth": "1px",
              "borderTopColor": "var(--tw-prose-th-borders)"
            },
            "tfoot td": {
              "verticalAlign": "top"
            }
          },
          {
            "--tw-prose-body": "#374151",
            "--tw-prose-headings": "#111827",
            "--tw-prose-lead": "#4b5563",
            "--tw-prose-links": "#111827",
            "--tw-prose-bold": "#111827",
            "--tw-prose-counters": "#6b7280",
            "--tw-prose-bullets": "#d1d5db",
            "--tw-prose-hr": "#e5e7eb",
            "--tw-prose-quotes": "#111827",
            "--tw-prose-quote-borders": "#e5e7eb",
            "--tw-prose-captions": "#6b7280",
            "--tw-prose-code": "#111827",
            "--tw-prose-pre-code": "#e5e7eb",
            "--tw-prose-pre-bg": "#1f2937",
            "--tw-prose-th-borders": "#d1d5db",
            "--tw-prose-td-borders": "#e5e7eb",
            "--tw-prose-invert-body": "#d1d5db",
            "--tw-prose-invert-headings": "#fff",
            "--tw-prose-invert-lead": "#9ca3af",
            "--tw-prose-invert-links": "#fff",
            "--tw-prose-invert-bold": "#fff",
            "--tw-prose-invert-counters": "#9ca3af",
            "--tw-prose-invert-bullets": "#4b5563",
            "--tw-prose-invert-hr": "#374151",
            "--tw-prose-invert-quotes": "#f3f4f6",
            "--tw-prose-invert-quote-borders": "#374151",
            "--tw-prose-invert-captions": "#9ca3af",
            "--tw-prose-invert-code": "#fff",
            "--tw-prose-invert-pre-code": "#d1d5db",
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": "#4b5563",
            "--tw-prose-invert-td-borders": "#374151"
          },
          {
            "fontSize": "1rem",
            "lineHeight": "1.75",
            "p": {
              "marginTop": "1.25em",
              "marginBottom": "1.25em"
            },
            "[class~=\"lead\"]": {
              "fontSize": "1.25em",
              "lineHeight": "1.6",
              "marginTop": "1.2em",
              "marginBottom": "1.2em"
            },
            "blockquote": {
              "marginTop": "1.6em",
              "marginBottom": "1.6em",
              "paddingLeft": "1em"
            },
            "h1": {
              "fontSize": "2.25em",
              "marginTop": "0",
              "marginBottom": "0.8888889em",
              "lineHeight": "1.1111111"
            },
            "h2": {
              "fontSize": "1.5em",
              "marginTop": "2em",
              "marginBottom": "1em",
              "lineHeight": "1.3333333"
            },
            "h3": {
              "fontSize": "1.25em",
              "marginTop": "1.6em",
              "marginBottom": "0.6em",
              "lineHeight": "1.6"
            },
            "h4": {
              "marginTop": "1.5em",
              "marginBottom": "0.5em",
              "lineHeight": "1.5"
            },
            "img": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "video": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "figure": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "figure > *": {
              "marginTop": "0",
              "marginBottom": "0"
            },
            "figcaption": {
              "fontSize": "0.875em",
              "lineHeight": "1.4285714",
              "marginTop": "0.8571429em"
            },
            "code": {
              "fontSize": "0.875em"
            },
            "h2 code": {
              "fontSize": "0.875em"
            },
            "h3 code": {
              "fontSize": "0.9em"
            },
            "pre": {
              "fontSize": "0.875em",
              "lineHeight": "1.7142857",
              "marginTop": "1.7142857em",
              "marginBottom": "1.7142857em",
              "borderRadius": "0.375rem",
              "paddingTop": "0.8571429em",
              "paddingRight": "1.1428571em",
              "paddingBottom": "0.8571429em",
              "paddingLeft": "1.1428571em"
            },
            "ol": {
              "marginTop": "1.25em",
              "marginBottom": "1.25em",
              "paddingLeft": "1.625em"
            },
            "ul": {
              "marginTop": "1.25em",
              "marginBottom": "1.25em",
              "paddingLeft": "1.625em"
            },
            "li": {
              "marginTop": "0.5em",
              "marginBottom": "0.5em"
            },
            "ol > li": {
              "paddingLeft": "0.375em"
            },
            "ul > li": {
              "paddingLeft": "0.375em"
            },
            "> ul > li p": {
              "marginTop": "0.75em",
              "marginBottom": "0.75em"
            },
            "> ul > li > *:first-child": {
              "marginTop": "1.25em"
            },
            "> ul > li > *:last-child": {
              "marginBottom": "1.25em"
            },
            "> ol > li > *:first-child": {
              "marginTop": "1.25em"
            },
            "> ol > li > *:last-child": {
              "marginBottom": "1.25em"
            },
            "ul ul, ul ol, ol ul, ol ol": {
              "marginTop": "0.75em",
              "marginBottom": "0.75em"
            },
            "hr": {
              "marginTop": "3em",
              "marginBottom": "3em"
            },
            "hr + *": {
              "marginTop": "0"
            },
            "h2 + *": {
              "marginTop": "0"
            },
            "h3 + *": {
              "marginTop": "0"
            },
            "h4 + *": {
              "marginTop": "0"
            },
            "table": {
              "fontSize": "0.875em",
              "lineHeight": "1.7142857"
            },
            "thead th": {
              "paddingRight": "0.5714286em",
              "paddingBottom": "0.5714286em",
              "paddingLeft": "0.5714286em"
            },
            "thead th:first-child": {
              "paddingLeft": "0"
            },
            "thead th:last-child": {
              "paddingRight": "0"
            },
            "tbody td, tfoot td": {
              "paddingTop": "0.5714286em",
              "paddingRight": "0.5714286em",
              "paddingBottom": "0.5714286em",
              "paddingLeft": "0.5714286em"
            },
            "tbody td:first-child, tfoot td:first-child": {
              "paddingLeft": "0"
            },
            "tbody td:last-child, tfoot td:last-child": {
              "paddingRight": "0"
            }
          },
          {
            "> :first-child": {
              "marginTop": "0"
            },
            "> :last-child": {
              "marginBottom": "0"
            }
          }
        ]
      },
      "sm": {
        "css": [
          {
            "fontSize": "0.875rem",
            "lineHeight": "1.7142857",
            "p": {
              "marginTop": "1.1428571em",
              "marginBottom": "1.1428571em"
            },
            "[class~=\"lead\"]": {
              "fontSize": "1.2857143em",
              "lineHeight": "1.5555556",
              "marginTop": "0.8888889em",
              "marginBottom": "0.8888889em"
            },
            "blockquote": {
              "marginTop": "1.3333333em",
              "marginBottom": "1.3333333em",
              "paddingLeft": "1.1111111em"
            },
            "h1": {
              "fontSize": "2.1428571em",
              "marginTop": "0",
              "marginBottom": "0.8em",
              "lineHeight": "1.2"
            },
            "h2": {
              "fontSize": "1.4285714em",
              "marginTop": "1.6em",
              "marginBottom": "0.8em",
              "lineHeight": "1.4"
            },
            "h3": {
              "fontSize": "1.2857143em",
              "marginTop": "1.5555556em",
              "marginBottom": "0.4444444em",
              "lineHeight": "1.5555556"
            },
            "h4": {
              "marginTop": "1.4285714em",
              "marginBottom": "0.5714286em",
              "lineHeight": "1.4285714"
            },
            "img": {
              "marginTop": "1.7142857em",
              "marginBottom": "1.7142857em"
            },
            "video": {
              "marginTop": "1.7142857em",
              "marginBottom": "1.7142857em"
            },
            "figure": {
              "marginTop": "1.7142857em",
              "marginBottom": "1.7142857em"
            },
            "figure > *": {
              "marginTop": "0",
              "marginBottom": "0"
            },
            "figcaption": {
              "fontSize": "0.8571429em",
              "lineHeight": "1.3333333",
              "marginTop": "0.6666667em"
            },
            "code": {
              "fontSize": "0.8571429em"
            },
            "h2 code": {
              "fontSize": "0.9em"
            },
            "h3 code": {
              "fontSize": "0.8888889em"
            },
            "pre": {
              "fontSize": "0.8571429em",
              "lineHeight": "1.6666667",
              "marginTop": "1.6666667em",
              "marginBottom": "1.6666667em",
              "borderRadius": "0.25rem",
              "paddingTop": "0.6666667em",
              "paddingRight": "1em",
              "paddingBottom": "0.6666667em",
              "paddingLeft": "1em"
            },
            "ol": {
              "marginTop": "1.1428571em",
              "marginBottom": "1.1428571em",
              "paddingLeft": "1.5714286em"
            },
            "ul": {
              "marginTop": "1.1428571em",
              "marginBottom": "1.1428571em",
              "paddingLeft": "1.5714286em"
            },
            "li": {
              "marginTop": "0.2857143em",
              "marginBottom": "0.2857143em"
            },
            "ol > li": {
              "paddingLeft": "0.4285714em"
            },
            "ul > li": {
              "paddingLeft": "0.4285714em"
            },
            "> ul > li p": {
              "marginTop": "0.5714286em",
              "marginBottom": "0.5714286em"
            },
            "> ul > li > *:first-child": {
              "marginTop": "1.1428571em"
            },
            "> ul > li > *:last-child": {
              "marginBottom": "1.1428571em"
            },
            "> ol > li > *:first-child": {
              "marginTop": "1.1428571em"
            },
            "> ol > li > *:last-child": {
              "marginBottom": "1.1428571em"
            },
            "ul ul, ul ol, ol ul, ol ol": {
              "marginTop": "0.5714286em",
              "marginBottom": "0.5714286em"
            },
            "hr": {
              "marginTop": "2.8571429em",
              "marginBottom": "2.8571429em"
            },
            "hr + *": {
              "marginTop": "0"
            },
            "h2 + *": {
              "marginTop": "0"
            },
            "h3 + *": {
              "marginTop": "0"
            },
            "h4 + *": {
              "marginTop": "0"
            },
            "table": {
              "fontSize": "0.8571429em",
              "lineHeight": "1.5"
            },
            "thead th": {
              "paddingRight": "1em",
              "paddingBottom": "0.6666667em",
              "paddingLeft": "1em"
            },
            "thead th:first-child": {
              "paddingLeft": "0"
            },
            "thead th:last-child": {
              "paddingRight": "0"
            },
            "tbody td, tfoot td": {
              "paddingTop": "0.6666667em",
              "paddingRight": "1em",
              "paddingBottom": "0.6666667em",
              "paddingLeft": "1em"
            },
            "tbody td:first-child, tfoot td:first-child": {
              "paddingLeft": "0"
            },
            "tbody td:last-child, tfoot td:last-child": {
              "paddingRight": "0"
            }
          },
          {
            "> :first-child": {
              "marginTop": "0"
            },
            "> :last-child": {
              "marginBottom": "0"
            }
          }
        ]
      },
      "base": {
        "css": [
          {
            "fontSize": "1rem",
            "lineHeight": "1.75",
            "p": {
              "marginTop": "1.25em",
              "marginBottom": "1.25em"
            },
            "[class~=\"lead\"]": {
              "fontSize": "1.25em",
              "lineHeight": "1.6",
              "marginTop": "1.2em",
              "marginBottom": "1.2em"
            },
            "blockquote": {
              "marginTop": "1.6em",
              "marginBottom": "1.6em",
              "paddingLeft": "1em"
            },
            "h1": {
              "fontSize": "2.25em",
              "marginTop": "0",
              "marginBottom": "0.8888889em",
              "lineHeight": "1.1111111"
            },
            "h2": {
              "fontSize": "1.5em",
              "marginTop": "2em",
              "marginBottom": "1em",
              "lineHeight": "1.3333333"
            },
            "h3": {
              "fontSize": "1.25em",
              "marginTop": "1.6em",
              "marginBottom": "0.6em",
              "lineHeight": "1.6"
            },
            "h4": {
              "marginTop": "1.5em",
              "marginBottom": "0.5em",
              "lineHeight": "1.5"
            },
            "img": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "video": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "figure": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "figure > *": {
              "marginTop": "0",
              "marginBottom": "0"
            },
            "figcaption": {
              "fontSize": "0.875em",
              "lineHeight": "1.4285714",
              "marginTop": "0.8571429em"
            },
            "code": {
              "fontSize": "0.875em"
            },
            "h2 code": {
              "fontSize": "0.875em"
            },
            "h3 code": {
              "fontSize": "0.9em"
            },
            "pre": {
              "fontSize": "0.875em",
              "lineHeight": "1.7142857",
              "marginTop": "1.7142857em",
              "marginBottom": "1.7142857em",
              "borderRadius": "0.375rem",
              "paddingTop": "0.8571429em",
              "paddingRight": "1.1428571em",
              "paddingBottom": "0.8571429em",
              "paddingLeft": "1.1428571em"
            },
            "ol": {
              "marginTop": "1.25em",
              "marginBottom": "1.25em",
              "paddingLeft": "1.625em"
            },
            "ul": {
              "marginTop": "1.25em",
              "marginBottom": "1.25em",
              "paddingLeft": "1.625em"
            },
            "li": {
              "marginTop": "0.5em",
              "marginBottom": "0.5em"
            },
            "ol > li": {
              "paddingLeft": "0.375em"
            },
            "ul > li": {
              "paddingLeft": "0.375em"
            },
            "> ul > li p": {
              "marginTop": "0.75em",
              "marginBottom": "0.75em"
            },
            "> ul > li > *:first-child": {
              "marginTop": "1.25em"
            },
            "> ul > li > *:last-child": {
              "marginBottom": "1.25em"
            },
            "> ol > li > *:first-child": {
              "marginTop": "1.25em"
            },
            "> ol > li > *:last-child": {
              "marginBottom": "1.25em"
            },
            "ul ul, ul ol, ol ul, ol ol": {
              "marginTop": "0.75em",
              "marginBottom": "0.75em"
            },
            "hr": {
              "marginTop": "3em",
              "marginBottom": "3em"
            },
            "hr + *": {
              "marginTop": "0"
            },
            "h2 + *": {
              "marginTop": "0"
            },
            "h3 + *": {
              "marginTop": "0"
            },
            "h4 + *": {
              "marginTop": "0"
            },
            "table": {
              "fontSize": "0.875em",
              "lineHeight": "1.7142857"
            },
            "thead th": {
              "paddingRight": "0.5714286em",
              "paddingBottom": "0.5714286em",
              "paddingLeft": "0.5714286em"
            },
            "thead th:first-child": {
              "paddingLeft": "0"
            },
            "thead th:last-child": {
              "paddingRight": "0"
            },
            "tbody td, tfoot td": {
              "paddingTop": "0.5714286em",
              "paddingRight": "0.5714286em",
              "paddingBottom": "0.5714286em",
              "paddingLeft": "0.5714286em"
            },
            "tbody td:first-child, tfoot td:first-child": {
              "paddingLeft": "0"
            },
            "tbody td:last-child, tfoot td:last-child": {
              "paddingRight": "0"
            }
          },
          {
            "> :first-child": {
              "marginTop": "0"
            },
            "> :last-child": {
              "marginBottom": "0"
            }
          }
        ]
      },
      "lg": {
        "css": [
          {
            "fontSize": "1.125rem",
            "lineHeight": "1.7777778",
            "p": {
              "marginTop": "1.3333333em",
              "marginBottom": "1.3333333em"
            },
            "[class~=\"lead\"]": {
              "fontSize": "1.2222222em",
              "lineHeight": "1.4545455",
              "marginTop": "1.0909091em",
              "marginBottom": "1.0909091em"
            },
            "blockquote": {
              "marginTop": "1.6666667em",
              "marginBottom": "1.6666667em",
              "paddingLeft": "1em"
            },
            "h1": {
              "fontSize": "2.6666667em",
              "marginTop": "0",
              "marginBottom": "0.8333333em",
              "lineHeight": "1"
            },
            "h2": {
              "fontSize": "1.6666667em",
              "marginTop": "1.8666667em",
              "marginBottom": "1.0666667em",
              "lineHeight": "1.3333333"
            },
            "h3": {
              "fontSize": "1.3333333em",
              "marginTop": "1.6666667em",
              "marginBottom": "0.6666667em",
              "lineHeight": "1.5"
            },
            "h4": {
              "marginTop": "1.7777778em",
              "marginBottom": "0.4444444em",
              "lineHeight": "1.5555556"
            },
            "img": {
              "marginTop": "1.7777778em",
              "marginBottom": "1.7777778em"
            },
            "video": {
              "marginTop": "1.7777778em",
              "marginBottom": "1.7777778em"
            },
            "figure": {
              "marginTop": "1.7777778em",
              "marginBottom": "1.7777778em"
            },
            "figure > *": {
              "marginTop": "0",
              "marginBottom": "0"
            },
            "figcaption": {
              "fontSize": "0.8888889em",
              "lineHeight": "1.5",
              "marginTop": "1em"
            },
            "code": {
              "fontSize": "0.8888889em"
            },
            "h2 code": {
              "fontSize": "0.8666667em"
            },
            "h3 code": {
              "fontSize": "0.875em"
            },
            "pre": {
              "fontSize": "0.8888889em",
              "lineHeight": "1.75",
              "marginTop": "2em",
              "marginBottom": "2em",
              "borderRadius": "0.375rem",
              "paddingTop": "1em",
              "paddingRight": "1.5em",
              "paddingBottom": "1em",
              "paddingLeft": "1.5em"
            },
            "ol": {
              "marginTop": "1.3333333em",
              "marginBottom": "1.3333333em",
              "paddingLeft": "1.5555556em"
            },
            "ul": {
              "marginTop": "1.3333333em",
              "marginBottom": "1.3333333em",
              "paddingLeft": "1.5555556em"
            },
            "li": {
              "marginTop": "0.6666667em",
              "marginBottom": "0.6666667em"
            },
            "ol > li": {
              "paddingLeft": "0.4444444em"
            },
            "ul > li": {
              "paddingLeft": "0.4444444em"
            },
            "> ul > li p": {
              "marginTop": "0.8888889em",
              "marginBottom": "0.8888889em"
            },
            "> ul > li > *:first-child": {
              "marginTop": "1.3333333em"
            },
            "> ul > li > *:last-child": {
              "marginBottom": "1.3333333em"
            },
            "> ol > li > *:first-child": {
              "marginTop": "1.3333333em"
            },
            "> ol > li > *:last-child": {
              "marginBottom": "1.3333333em"
            },
            "ul ul, ul ol, ol ul, ol ol": {
              "marginTop": "0.8888889em",
              "marginBottom": "0.8888889em"
            },
            "hr": {
              "marginTop": "3.1111111em",
              "marginBottom": "3.1111111em"
            },
            "hr + *": {
              "marginTop": "0"
            },
            "h2 + *": {
              "marginTop": "0"
            },
            "h3 + *": {
              "marginTop": "0"
            },
            "h4 + *": {
              "marginTop": "0"
            },
            "table": {
              "fontSize": "0.8888889em",
              "lineHeight": "1.5"
            },
            "thead th": {
              "paddingRight": "0.75em",
              "paddingBottom": "0.75em",
              "paddingLeft": "0.75em"
            },
            "thead th:first-child": {
              "paddingLeft": "0"
            },
            "thead th:last-child": {
              "paddingRight": "0"
            },
            "tbody td, tfoot td": {
              "paddingTop": "0.75em",
              "paddingRight": "0.75em",
              "paddingBottom": "0.75em",
              "paddingLeft": "0.75em"
            },
            "tbody td:first-child, tfoot td:first-child": {
              "paddingLeft": "0"
            },
            "tbody td:last-child, tfoot td:last-child": {
              "paddingRight": "0"
            }
          },
          {
            "> :first-child": {
              "marginTop": "0"
            },
            "> :last-child": {
              "marginBottom": "0"
            }
          }
        ]
      },
      "xl": {
        "css": [
          {
            "fontSize": "1.25rem",
            "lineHeight": "1.8",
            "p": {
              "marginTop": "1.2em",
              "marginBottom": "1.2em"
            },
            "[class~=\"lead\"]": {
              "fontSize": "1.2em",
              "lineHeight": "1.5",
              "marginTop": "1em",
              "marginBottom": "1em"
            },
            "blockquote": {
              "marginTop": "1.6em",
              "marginBottom": "1.6em",
              "paddingLeft": "1.0666667em"
            },
            "h1": {
              "fontSize": "2.8em",
              "marginTop": "0",
              "marginBottom": "0.8571429em",
              "lineHeight": "1"
            },
            "h2": {
              "fontSize": "1.8em",
              "marginTop": "1.5555556em",
              "marginBottom": "0.8888889em",
              "lineHeight": "1.1111111"
            },
            "h3": {
              "fontSize": "1.5em",
              "marginTop": "1.6em",
              "marginBottom": "0.6666667em",
              "lineHeight": "1.3333333"
            },
            "h4": {
              "marginTop": "1.8em",
              "marginBottom": "0.6em",
              "lineHeight": "1.6"
            },
            "img": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "video": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "figure": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "figure > *": {
              "marginTop": "0",
              "marginBottom": "0"
            },
            "figcaption": {
              "fontSize": "0.9em",
              "lineHeight": "1.5555556",
              "marginTop": "1em"
            },
            "code": {
              "fontSize": "0.9em"
            },
            "h2 code": {
              "fontSize": "0.8611111em"
            },
            "h3 code": {
              "fontSize": "0.9em"
            },
            "pre": {
              "fontSize": "0.9em",
              "lineHeight": "1.7777778",
              "marginTop": "2em",
              "marginBottom": "2em",
              "borderRadius": "0.5rem",
              "paddingTop": "1.1111111em",
              "paddingRight": "1.3333333em",
              "paddingBottom": "1.1111111em",
              "paddingLeft": "1.3333333em"
            },
            "ol": {
              "marginTop": "1.2em",
              "marginBottom": "1.2em",
              "paddingLeft": "1.6em"
            },
            "ul": {
              "marginTop": "1.2em",
              "marginBottom": "1.2em",
              "paddingLeft": "1.6em"
            },
            "li": {
              "marginTop": "0.6em",
              "marginBottom": "0.6em"
            },
            "ol > li": {
              "paddingLeft": "0.4em"
            },
            "ul > li": {
              "paddingLeft": "0.4em"
            },
            "> ul > li p": {
              "marginTop": "0.8em",
              "marginBottom": "0.8em"
            },
            "> ul > li > *:first-child": {
              "marginTop": "1.2em"
            },
            "> ul > li > *:last-child": {
              "marginBottom": "1.2em"
            },
            "> ol > li > *:first-child": {
              "marginTop": "1.2em"
            },
            "> ol > li > *:last-child": {
              "marginBottom": "1.2em"
            },
            "ul ul, ul ol, ol ul, ol ol": {
              "marginTop": "0.8em",
              "marginBottom": "0.8em"
            },
            "hr": {
              "marginTop": "2.8em",
              "marginBottom": "2.8em"
            },
            "hr + *": {
              "marginTop": "0"
            },
            "h2 + *": {
              "marginTop": "0"
            },
            "h3 + *": {
              "marginTop": "0"
            },
            "h4 + *": {
              "marginTop": "0"
            },
            "table": {
              "fontSize": "0.9em",
              "lineHeight": "1.5555556"
            },
            "thead th": {
              "paddingRight": "0.6666667em",
              "paddingBottom": "0.8888889em",
              "paddingLeft": "0.6666667em"
            },
            "thead th:first-child": {
              "paddingLeft": "0"
            },
            "thead th:last-child": {
              "paddingRight": "0"
            },
            "tbody td, tfoot td": {
              "paddingTop": "0.8888889em",
              "paddingRight": "0.6666667em",
              "paddingBottom": "0.8888889em",
              "paddingLeft": "0.6666667em"
            },
            "tbody td:first-child, tfoot td:first-child": {
              "paddingLeft": "0"
            },
            "tbody td:last-child, tfoot td:last-child": {
              "paddingRight": "0"
            }
          },
          {
            "> :first-child": {
              "marginTop": "0"
            },
            "> :last-child": {
              "marginBottom": "0"
            }
          }
        ]
      },
      "2xl": {
        "css": [
          {
            "fontSize": "1.5rem",
            "lineHeight": "1.6666667",
            "p": {
              "marginTop": "1.3333333em",
              "marginBottom": "1.3333333em"
            },
            "[class~=\"lead\"]": {
              "fontSize": "1.25em",
              "lineHeight": "1.4666667",
              "marginTop": "1.0666667em",
              "marginBottom": "1.0666667em"
            },
            "blockquote": {
              "marginTop": "1.7777778em",
              "marginBottom": "1.7777778em",
              "paddingLeft": "1.1111111em"
            },
            "h1": {
              "fontSize": "2.6666667em",
              "marginTop": "0",
              "marginBottom": "0.875em",
              "lineHeight": "1"
            },
            "h2": {
              "fontSize": "2em",
              "marginTop": "1.5em",
              "marginBottom": "0.8333333em",
              "lineHeight": "1.0833333"
            },
            "h3": {
              "fontSize": "1.5em",
              "marginTop": "1.5555556em",
              "marginBottom": "0.6666667em",
              "lineHeight": "1.2222222"
            },
            "h4": {
              "marginTop": "1.6666667em",
              "marginBottom": "0.6666667em",
              "lineHeight": "1.5"
            },
            "img": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "video": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "figure": {
              "marginTop": "2em",
              "marginBottom": "2em"
            },
            "figure > *": {
              "marginTop": "0",
              "marginBottom": "0"
            },
            "figcaption": {
              "fontSize": "0.8333333em",
              "lineHeight": "1.6",
              "marginTop": "1em"
            },
            "code": {
              "fontSize": "0.8333333em"
            },
            "h2 code": {
              "fontSize": "0.875em"
            },
            "h3 code": {
              "fontSize": "0.8888889em"
            },
            "pre": {
              "fontSize": "0.8333333em",
              "lineHeight": "1.8",
              "marginTop": "2em",
              "marginBottom": "2em",
              "borderRadius": "0.5rem",
              "paddingTop": "1.2em",
              "paddingRight": "1.6em",
              "paddingBottom": "1.2em",
              "paddingLeft": "1.6em"
            },
            "ol": {
              "marginTop": "1.3333333em",
              "marginBottom": "1.3333333em",
              "paddingLeft": "1.5833333em"
            },
            "ul": {
              "marginTop": "1.3333333em",
              "marginBottom": "1.3333333em",
              "paddingLeft": "1.5833333em"
            },
            "li": {
              "marginTop": "0.5em",
              "marginBottom": "0.5em"
            },
            "ol > li": {
              "paddingLeft": "0.4166667em"
            },
            "ul > li": {
              "paddingLeft": "0.4166667em"
            },
            "> ul > li p": {
              "marginTop": "0.8333333em",
              "marginBottom": "0.8333333em"
            },
            "> ul > li > *:first-child": {
              "marginTop": "1.3333333em"
            },
            "> ul > li > *:last-child": {
              "marginBottom": "1.3333333em"
            },
            "> ol > li > *:first-child": {
              "marginTop": "1.3333333em"
            },
            "> ol > li > *:last-child": {
              "marginBottom": "1.3333333em"
            },
            "ul ul, ul ol, ol ul, ol ol": {
              "marginTop": "0.6666667em",
              "marginBottom": "0.6666667em"
            },
            "hr": {
              "marginTop": "3em",
              "marginBottom": "3em"
            },
            "hr + *": {
              "marginTop": "0"
            },
            "h2 + *": {
              "marginTop": "0"
            },
            "h3 + *": {
              "marginTop": "0"
            },
            "h4 + *": {
              "marginTop": "0"
            },
            "table": {
              "fontSize": "0.8333333em",
              "lineHeight": "1.4"
            },
            "thead th": {
              "paddingRight": "0.6em",
              "paddingBottom": "0.8em",
              "paddingLeft": "0.6em"
            },
            "thead th:first-child": {
              "paddingLeft": "0"
            },
            "thead th:last-child": {
              "paddingRight": "0"
            },
            "tbody td, tfoot td": {
              "paddingTop": "0.8em",
              "paddingRight": "0.6em",
              "paddingBottom": "0.8em",
              "paddingLeft": "0.6em"
            },
            "tbody td:first-child, tfoot td:first-child": {
              "paddingLeft": "0"
            },
            "tbody td:last-child, tfoot td:last-child": {
              "paddingRight": "0"
            }
          },
          {
            "> :first-child": {
              "marginTop": "0"
            },
            "> :last-child": {
              "marginBottom": "0"
            }
          }
        ]
      },
      "invert": {
        "css": {
          "--tw-prose-body": "var(--tw-prose-invert-body)",
          "--tw-prose-headings": "var(--tw-prose-invert-headings)",
          "--tw-prose-lead": "var(--tw-prose-invert-lead)",
          "--tw-prose-links": "var(--tw-prose-invert-links)",
          "--tw-prose-bold": "var(--tw-prose-invert-bold)",
          "--tw-prose-counters": "var(--tw-prose-invert-counters)",
          "--tw-prose-bullets": "var(--tw-prose-invert-bullets)",
          "--tw-prose-hr": "var(--tw-prose-invert-hr)",
          "--tw-prose-quotes": "var(--tw-prose-invert-quotes)",
          "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)",
          "--tw-prose-captions": "var(--tw-prose-invert-captions)",
          "--tw-prose-code": "var(--tw-prose-invert-code)",
          "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)",
          "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)",
          "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)",
          "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)"
        }
      },
      "slate": {
        "css": {
          "--tw-prose-body": "#334155",
          "--tw-prose-headings": "#0f172a",
          "--tw-prose-lead": "#475569",
          "--tw-prose-links": "#0f172a",
          "--tw-prose-bold": "#0f172a",
          "--tw-prose-counters": "#64748b",
          "--tw-prose-bullets": "#cbd5e1",
          "--tw-prose-hr": "#e2e8f0",
          "--tw-prose-quotes": "#0f172a",
          "--tw-prose-quote-borders": "#e2e8f0",
          "--tw-prose-captions": "#64748b",
          "--tw-prose-code": "#0f172a",
          "--tw-prose-pre-code": "#e2e8f0",
          "--tw-prose-pre-bg": "#1e293b",
          "--tw-prose-th-borders": "#cbd5e1",
          "--tw-prose-td-borders": "#e2e8f0",
          "--tw-prose-invert-body": "#cbd5e1",
          "--tw-prose-invert-headings": "#fff",
          "--tw-prose-invert-lead": "#94a3b8",
          "--tw-prose-invert-links": "#fff",
          "--tw-prose-invert-bold": "#fff",
          "--tw-prose-invert-counters": "#94a3b8",
          "--tw-prose-invert-bullets": "#475569",
          "--tw-prose-invert-hr": "#334155",
          "--tw-prose-invert-quotes": "#f1f5f9",
          "--tw-prose-invert-quote-borders": "#334155",
          "--tw-prose-invert-captions": "#94a3b8",
          "--tw-prose-invert-code": "#fff",
          "--tw-prose-invert-pre-code": "#cbd5e1",
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
          "--tw-prose-invert-th-borders": "#475569",
          "--tw-prose-invert-td-borders": "#334155"
        }
      },
      "gray": {
        "css": {
          "--tw-prose-body": "#374151",
          "--tw-prose-headings": "#111827",
          "--tw-prose-lead": "#4b5563",
          "--tw-prose-links": "#111827",
          "--tw-prose-bold": "#111827",
          "--tw-prose-counters": "#6b7280",
          "--tw-prose-bullets": "#d1d5db",
          "--tw-prose-hr": "#e5e7eb",
          "--tw-prose-quotes": "#111827",
          "--tw-prose-quote-borders": "#e5e7eb",
          "--tw-prose-captions": "#6b7280",
          "--tw-prose-code": "#111827",
          "--tw-prose-pre-code": "#e5e7eb",
          "--tw-prose-pre-bg": "#1f2937",
          "--tw-prose-th-borders": "#d1d5db",
          "--tw-prose-td-borders": "#e5e7eb",
          "--tw-prose-invert-body": "#d1d5db",
          "--tw-prose-invert-headings": "#fff",
          "--tw-prose-invert-lead": "#9ca3af",
          "--tw-prose-invert-links": "#fff",
          "--tw-prose-invert-bold": "#fff",
          "--tw-prose-invert-counters": "#9ca3af",
          "--tw-prose-invert-bullets": "#4b5563",
          "--tw-prose-invert-hr": "#374151",
          "--tw-prose-invert-quotes": "#f3f4f6",
          "--tw-prose-invert-quote-borders": "#374151",
          "--tw-prose-invert-captions": "#9ca3af",
          "--tw-prose-invert-code": "#fff",
          "--tw-prose-invert-pre-code": "#d1d5db",
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
          "--tw-prose-invert-th-borders": "#4b5563",
          "--tw-prose-invert-td-borders": "#374151"
        }
      },
      "zinc": {
        "css": {
          "--tw-prose-body": "#3f3f46",
          "--tw-prose-headings": "#18181b",
          "--tw-prose-lead": "#52525b",
          "--tw-prose-links": "#18181b",
          "--tw-prose-bold": "#18181b",
          "--tw-prose-counters": "#71717a",
          "--tw-prose-bullets": "#d4d4d8",
          "--tw-prose-hr": "#e4e4e7",
          "--tw-prose-quotes": "#18181b",
          "--tw-prose-quote-borders": "#e4e4e7",
          "--tw-prose-captions": "#71717a",
          "--tw-prose-code": "#18181b",
          "--tw-prose-pre-code": "#e4e4e7",
          "--tw-prose-pre-bg": "#27272a",
          "--tw-prose-th-borders": "#d4d4d8",
          "--tw-prose-td-borders": "#e4e4e7",
          "--tw-prose-invert-body": "#d4d4d8",
          "--tw-prose-invert-headings": "#fff",
          "--tw-prose-invert-lead": "#a1a1aa",
          "--tw-prose-invert-links": "#fff",
          "--tw-prose-invert-bold": "#fff",
          "--tw-prose-invert-counters": "#a1a1aa",
          "--tw-prose-invert-bullets": "#52525b",
          "--tw-prose-invert-hr": "#3f3f46",
          "--tw-prose-invert-quotes": "#f4f4f5",
          "--tw-prose-invert-quote-borders": "#3f3f46",
          "--tw-prose-invert-captions": "#a1a1aa",
          "--tw-prose-invert-code": "#fff",
          "--tw-prose-invert-pre-code": "#d4d4d8",
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
          "--tw-prose-invert-th-borders": "#52525b",
          "--tw-prose-invert-td-borders": "#3f3f46"
        }
      },
      "neutral": {
        "css": {
          "--tw-prose-body": "#404040",
          "--tw-prose-headings": "#171717",
          "--tw-prose-lead": "#525252",
          "--tw-prose-links": "#171717",
          "--tw-prose-bold": "#171717",
          "--tw-prose-counters": "#737373",
          "--tw-prose-bullets": "#d4d4d4",
          "--tw-prose-hr": "#e5e5e5",
          "--tw-prose-quotes": "#171717",
          "--tw-prose-quote-borders": "#e5e5e5",
          "--tw-prose-captions": "#737373",
          "--tw-prose-code": "#171717",
          "--tw-prose-pre-code": "#e5e5e5",
          "--tw-prose-pre-bg": "#262626",
          "--tw-prose-th-borders": "#d4d4d4",
          "--tw-prose-td-borders": "#e5e5e5",
          "--tw-prose-invert-body": "#d4d4d4",
          "--tw-prose-invert-headings": "#fff",
          "--tw-prose-invert-lead": "#a3a3a3",
          "--tw-prose-invert-links": "#fff",
          "--tw-prose-invert-bold": "#fff",
          "--tw-prose-invert-counters": "#a3a3a3",
          "--tw-prose-invert-bullets": "#525252",
          "--tw-prose-invert-hr": "#404040",
          "--tw-prose-invert-quotes": "#f5f5f5",
          "--tw-prose-invert-quote-borders": "#404040",
          "--tw-prose-invert-captions": "#a3a3a3",
          "--tw-prose-invert-code": "#fff",
          "--tw-prose-invert-pre-code": "#d4d4d4",
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
          "--tw-prose-invert-th-borders": "#525252",
          "--tw-prose-invert-td-borders": "#404040"
        }
      },
      "stone": {
        "css": {
          "--tw-prose-body": "#44403c",
          "--tw-prose-headings": "#1c1917",
          "--tw-prose-lead": "#57534e",
          "--tw-prose-links": "#1c1917",
          "--tw-prose-bold": "#1c1917",
          "--tw-prose-counters": "#78716c",
          "--tw-prose-bullets": "#d6d3d1",
          "--tw-prose-hr": "#e7e5e4",
          "--tw-prose-quotes": "#1c1917",
          "--tw-prose-quote-borders": "#e7e5e4",
          "--tw-prose-captions": "#78716c",
          "--tw-prose-code": "#1c1917",
          "--tw-prose-pre-code": "#e7e5e4",
          "--tw-prose-pre-bg": "#292524",
          "--tw-prose-th-borders": "#d6d3d1",
          "--tw-prose-td-borders": "#e7e5e4",
          "--tw-prose-invert-body": "#d6d3d1",
          "--tw-prose-invert-headings": "#fff",
          "--tw-prose-invert-lead": "#a8a29e",
          "--tw-prose-invert-links": "#fff",
          "--tw-prose-invert-bold": "#fff",
          "--tw-prose-invert-counters": "#a8a29e",
          "--tw-prose-invert-bullets": "#57534e",
          "--tw-prose-invert-hr": "#44403c",
          "--tw-prose-invert-quotes": "#f5f5f4",
          "--tw-prose-invert-quote-borders": "#44403c",
          "--tw-prose-invert-captions": "#a8a29e",
          "--tw-prose-invert-code": "#fff",
          "--tw-prose-invert-pre-code": "#d6d3d1",
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
          "--tw-prose-invert-th-borders": "#57534e",
          "--tw-prose-invert-td-borders": "#44403c"
        }
      },
      "red": {
        "css": {
          "--tw-prose-links": "#dc2626",
          "--tw-prose-invert-links": "#ef4444"
        }
      },
      "orange": {
        "css": {
          "--tw-prose-links": "#ea580c",
          "--tw-prose-invert-links": "#f97316"
        }
      },
      "amber": {
        "css": {
          "--tw-prose-links": "#d97706",
          "--tw-prose-invert-links": "#f59e0b"
        }
      },
      "yellow": {
        "css": {
          "--tw-prose-links": "#ca8a04",
          "--tw-prose-invert-links": "#eab308"
        }
      },
      "lime": {
        "css": {
          "--tw-prose-links": "#65a30d",
          "--tw-prose-invert-links": "#84cc16"
        }
      },
      "green": {
        "css": {
          "--tw-prose-links": "#16a34a",
          "--tw-prose-invert-links": "#22c55e"
        }
      },
      "emerald": {
        "css": {
          "--tw-prose-links": "#059669",
          "--tw-prose-invert-links": "#10b981"
        }
      },
      "teal": {
        "css": {
          "--tw-prose-links": "#0d9488",
          "--tw-prose-invert-links": "#14b8a6"
        }
      },
      "cyan": {
        "css": {
          "--tw-prose-links": "#0891b2",
          "--tw-prose-invert-links": "#06b6d4"
        }
      },
      "sky": {
        "css": {
          "--tw-prose-links": "#0284c7",
          "--tw-prose-invert-links": "#0ea5e9"
        }
      },
      "blue": {
        "css": {
          "--tw-prose-links": "#2563eb",
          "--tw-prose-invert-links": "#3b82f6"
        }
      },
      "indigo": {
        "css": {
          "--tw-prose-links": "#4f46e5",
          "--tw-prose-invert-links": "#6366f1"
        }
      },
      "violet": {
        "css": {
          "--tw-prose-links": "#7c3aed",
          "--tw-prose-invert-links": "#8b5cf6"
        }
      },
      "purple": {
        "css": {
          "--tw-prose-links": "#9333ea",
          "--tw-prose-invert-links": "#a855f7"
        }
      },
      "fuchsia": {
        "css": {
          "--tw-prose-links": "#c026d3",
          "--tw-prose-invert-links": "#d946ef"
        }
      },
      "pink": {
        "css": {
          "--tw-prose-links": "#db2777",
          "--tw-prose-invert-links": "#ec4899"
        }
      },
      "rose": {
        "css": {
          "--tw-prose-links": "#e11d48",
          "--tw-prose-invert-links": "#f43f5e"
        }
      }
    },
    "screens": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "mobile-max": {
        "max": "767px"
      },
      "md-max": {
        "max": "1023px"
      },
      "m-nav-max": {
        "max": "1023px"
      },
      "tablet-max": {
        "max": "1151px"
      },
      "desktop-min": {
        "min": "1152px"
      },
      "desktop-max": {
        "max": "1279px"
      },
      "md-desktop-max": {
        "max": "1439px"
      }
    },
    "supports": {},
    "colors": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "columns": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "auto": "auto",
      "3xs": "16rem",
      "2xs": "18rem",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem"
    },
    "spacing": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "animation": {
      "none": "none",
      "spin": "spin 1s linear infinite",
      "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "bounce": "bounce 1s infinite"
    },
    "aria": {
      "checked": "checked=\"true\"",
      "disabled": "disabled=\"true\"",
      "expanded": "expanded=\"true\"",
      "hidden": "hidden=\"true\"",
      "pressed": "pressed=\"true\"",
      "readonly": "readonly=\"true\"",
      "required": "required=\"true\"",
      "selected": "selected=\"true\""
    },
    "aspectRatio": {
      "auto": "auto",
      "square": "1 / 1",
      "video": "16 / 9"
    },
    "backdropBlur": {
      "0": "0",
      "none": "0",
      "sm": "4px",
      "DEFAULT": "8px",
      "md": "12px",
      "lg": "16px",
      "xl": "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    "backdropBrightness": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "backdropContrast": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "100": "1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "backdropGrayscale": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "backdropHueRotate": {
      "0": "0deg",
      "15": "15deg",
      "30": "30deg",
      "60": "60deg",
      "90": "90deg",
      "180": "180deg"
    },
    "backdropInvert": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "backdropOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "backdropSaturate": {
      "0": "0",
      "50": ".5",
      "100": "1",
      "150": "1.5",
      "200": "2"
    },
    "backdropSepia": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "backgroundColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "backgroundImage": {
      "none": "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    "backgroundOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "backgroundPosition": {
      "bottom": "bottom",
      "center": "center",
      "left": "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      "right": "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      "top": "top"
    },
    "backgroundSize": {
      "auto": "auto",
      "cover": "cover",
      "contain": "contain"
    },
    "blur": {
      "0": "0",
      "none": "0",
      "sm": "4px",
      "DEFAULT": "8px",
      "md": "12px",
      "lg": "16px",
      "xl": "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    "brightness": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "borderColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      },
      "DEFAULT": "#e5e7eb"
    },
    "borderOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "borderRadius": {
      "none": "0px",
      "sm": "0.125rem",
      "DEFAULT": "0.25rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "full": "9999px"
    },
    "borderSpacing": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "borderWidth": {
      "0": "0px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "DEFAULT": "1px"
    },
    "boxShadow": {
      "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      "DEFAULT": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      "xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      "none": "none"
    },
    "boxShadowColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "caretColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "accentColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      },
      "auto": "auto"
    },
    "contrast": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "100": "1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "container": {},
    "content": {
      "none": "none"
    },
    "cursor": {
      "auto": "auto",
      "default": "default",
      "pointer": "pointer",
      "wait": "wait",
      "text": "text",
      "move": "move",
      "help": "help",
      "not-allowed": "not-allowed",
      "none": "none",
      "context-menu": "context-menu",
      "progress": "progress",
      "cell": "cell",
      "crosshair": "crosshair",
      "vertical-text": "vertical-text",
      "alias": "alias",
      "copy": "copy",
      "no-drop": "no-drop",
      "grab": "grab",
      "grabbing": "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out"
    },
    "divideColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      },
      "DEFAULT": "#e5e7eb"
    },
    "divideOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "divideWidth": {
      "0": "0px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "DEFAULT": "1px"
    },
    "dropShadow": {
      "sm": "0 1px 1px rgb(0 0 0 / 0.05)",
      "DEFAULT": [
        "0 1px 2px rgb(0 0 0 / 0.1)",
        "0 1px 1px rgb(0 0 0 / 0.06)"
      ],
      "md": [
        "0 4px 3px rgb(0 0 0 / 0.07)",
        "0 2px 2px rgb(0 0 0 / 0.06)"
      ],
      "lg": [
        "0 10px 8px rgb(0 0 0 / 0.04)",
        "0 4px 3px rgb(0 0 0 / 0.1)"
      ],
      "xl": [
        "0 20px 13px rgb(0 0 0 / 0.03)",
        "0 8px 5px rgb(0 0 0 / 0.08)"
      ],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      "none": "0 0 #0000"
    },
    "fill": {
      "none": "none",
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "grayscale": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "hueRotate": {
      "0": "0deg",
      "15": "15deg",
      "30": "30deg",
      "60": "60deg",
      "90": "90deg",
      "180": "180deg"
    },
    "invert": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "flex": {
      "1": "1 1 0%",
      "auto": "1 1 auto",
      "initial": "0 1 auto",
      "none": "none"
    },
    "flexBasis": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      "full": "100%"
    },
    "flexGrow": {
      "0": "0",
      "DEFAULT": "1"
    },
    "flexShrink": {
      "0": "0",
      "DEFAULT": "1"
    },
    "fontSize": {
      "xs": [
        "0.75rem",
        {
          "lineHeight": "1rem"
        }
      ],
      "sm": [
        "0.875rem",
        {
          "lineHeight": "1.25rem"
        }
      ],
      "base": [
        "1rem",
        {
          "lineHeight": "1.5rem"
        }
      ],
      "lg": [
        "1.125rem",
        {
          "lineHeight": "1.75rem"
        }
      ],
      "xl": [
        "1.25rem",
        {
          "lineHeight": "1.75rem"
        }
      ],
      "2xl": [
        "1.5rem",
        {
          "lineHeight": "2rem"
        }
      ],
      "3xl": [
        "1.875rem",
        {
          "lineHeight": "2.25rem"
        }
      ],
      "4xl": [
        "2.25rem",
        {
          "lineHeight": "2.5rem"
        }
      ],
      "5xl": [
        "3rem",
        {
          "lineHeight": "1"
        }
      ],
      "6xl": [
        "3.75rem",
        {
          "lineHeight": "1"
        }
      ],
      "7xl": [
        "4.5rem",
        {
          "lineHeight": "1"
        }
      ],
      "8xl": [
        "6rem",
        {
          "lineHeight": "1"
        }
      ],
      "9xl": [
        "8rem",
        {
          "lineHeight": "1"
        }
      ]
    },
    "fontWeight": {
      "thin": "100",
      "extralight": "200",
      "light": "300",
      "normal": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700",
      "extrabold": "800",
      "black": "900"
    },
    "gap": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "gradientColorStops": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "gridAutoColumns": {
      "auto": "auto",
      "min": "min-content",
      "max": "max-content",
      "fr": "minmax(0, 1fr)"
    },
    "gridAutoRows": {
      "auto": "auto",
      "min": "min-content",
      "max": "max-content",
      "fr": "minmax(0, 1fr)"
    },
    "gridColumn": {
      "auto": "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    "gridColumnEnd": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "13": "13",
      "auto": "auto"
    },
    "gridColumnStart": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "13": "13",
      "auto": "auto"
    },
    "gridRow": {
      "auto": "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-full": "1 / -1"
    },
    "gridRowStart": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "auto": "auto"
    },
    "gridRowEnd": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "auto": "auto"
    },
    "gridTemplateColumns": {
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))",
      "7": "repeat(7, minmax(0, 1fr))",
      "8": "repeat(8, minmax(0, 1fr))",
      "9": "repeat(9, minmax(0, 1fr))",
      "10": "repeat(10, minmax(0, 1fr))",
      "11": "repeat(11, minmax(0, 1fr))",
      "12": "repeat(12, minmax(0, 1fr))",
      "none": "none"
    },
    "gridTemplateRows": {
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))",
      "none": "none"
    },
    "height": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "full": "100%",
      "screen": "100vh",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "inset": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "full": "100%"
    },
    "keyframes": {
      "spin": {
        "to": {
          "transform": "rotate(360deg)"
        }
      },
      "ping": {
        "75%, 100%": {
          "transform": "scale(2)",
          "opacity": "0"
        }
      },
      "pulse": {
        "50%": {
          "opacity": ".5"
        }
      },
      "bounce": {
        "0%, 100%": {
          "transform": "translateY(-25%)",
          "animationTimingFunction": "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          "transform": "none",
          "animationTimingFunction": "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    "letterSpacing": {
      "tighter": "-0.05em",
      "tight": "-0.025em",
      "normal": "0em",
      "wide": "0.025em",
      "wider": "0.05em",
      "widest": "0.1em"
    },
    "lineHeight": {
      "3": ".75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "none": "1",
      "tight": "1.25",
      "snug": "1.375",
      "normal": "1.5",
      "relaxed": "1.625",
      "loose": "2"
    },
    "listStyleType": {
      "none": "none",
      "disc": "disc",
      "decimal": "decimal"
    },
    "margin": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "maxHeight": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "full": "100%",
      "screen": "100vh",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "maxWidth": {
      "0": "0rem",
      "none": "none",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content",
      "prose": "65ch",
      "screen-sm": "640px",
      "screen-md": "768px",
      "screen-lg": "1024px",
      "screen-xl": "1280px",
      "screen-2xl": "1536px"
    },
    "minHeight": {
      "0": "0px",
      "full": "100%",
      "screen": "100vh",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "minWidth": {
      "0": "0px",
      "full": "100%",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "objectPosition": {
      "bottom": "bottom",
      "center": "center",
      "left": "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      "right": "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      "top": "top"
    },
    "opacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "order": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "first": "-9999",
      "last": "9999",
      "none": "0"
    },
    "padding": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "placeholderColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "placeholderOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "outlineColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "outlineOffset": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px"
    },
    "outlineWidth": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px"
    },
    "ringColor": {
      "DEFAULT": "#3b82f6",
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "ringOffsetColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "ringOffsetWidth": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px"
    },
    "ringOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1",
      "DEFAULT": "0.5"
    },
    "ringWidth": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "DEFAULT": "3px"
    },
    "rotate": {
      "0": "0deg",
      "1": "1deg",
      "2": "2deg",
      "3": "3deg",
      "6": "6deg",
      "12": "12deg",
      "45": "45deg",
      "90": "90deg",
      "180": "180deg"
    },
    "saturate": {
      "0": "0",
      "50": ".5",
      "100": "1",
      "150": "1.5",
      "200": "2"
    },
    "scale": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5"
    },
    "scrollMargin": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "scrollPadding": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "sepia": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "skew": {
      "0": "0deg",
      "1": "1deg",
      "2": "2deg",
      "3": "3deg",
      "6": "6deg",
      "12": "12deg"
    },
    "space": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "stroke": {
      "none": "none",
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "strokeWidth": {
      "0": "0",
      "1": "1",
      "2": "2"
    },
    "textColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "textDecorationColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "primary": {
        "DEFAULT": "#0066FF"
      }
    },
    "textDecorationThickness": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "auto": "auto",
      "from-font": "from-font"
    },
    "textUnderlineOffset": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "auto": "auto"
    },
    "textIndent": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "textOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "transformOrigin": {
      "center": "center",
      "top": "top",
      "top-right": "top right",
      "right": "right",
      "bottom-right": "bottom right",
      "bottom": "bottom",
      "bottom-left": "bottom left",
      "left": "left",
      "top-left": "top left"
    },
    "transitionDelay": {
      "75": "75ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200ms",
      "300": "300ms",
      "500": "500ms",
      "700": "700ms",
      "1000": "1000ms"
    },
    "transitionDuration": {
      "75": "75ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200ms",
      "300": "300ms",
      "500": "500ms",
      "700": "700ms",
      "1000": "1000ms",
      "DEFAULT": "150ms"
    },
    "transitionProperty": {
      "none": "none",
      "all": "all",
      "DEFAULT": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      "colors": "color, background-color, border-color, text-decoration-color, fill, stroke",
      "opacity": "opacity",
      "shadow": "box-shadow",
      "transform": "transform"
    },
    "transitionTimingFunction": {
      "DEFAULT": "cubic-bezier(0.4, 0, 0.2, 1)",
      "linear": "linear",
      "in": "cubic-bezier(0.4, 0, 1, 1)",
      "out": "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    "translate": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "full": "100%"
    },
    "width": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      "full": "100%",
      "screen": "100vw",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "willChange": {
      "auto": "auto",
      "scroll": "scroll-position",
      "contents": "contents",
      "transform": "transform"
    },
    "zIndex": {
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
      "auto": "auto"
    }
  },
  "corePlugins": [
    "preflight",
    "container",
    "accessibility",
    "pointerEvents",
    "visibility",
    "position",
    "inset",
    "isolation",
    "zIndex",
    "order",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "float",
    "clear",
    "margin",
    "boxSizing",
    "display",
    "aspectRatio",
    "height",
    "maxHeight",
    "minHeight",
    "width",
    "minWidth",
    "maxWidth",
    "flex",
    "flexShrink",
    "flexGrow",
    "flexBasis",
    "tableLayout",
    "borderCollapse",
    "borderSpacing",
    "transformOrigin",
    "translate",
    "rotate",
    "skew",
    "scale",
    "transform",
    "animation",
    "cursor",
    "touchAction",
    "userSelect",
    "resize",
    "scrollSnapType",
    "scrollSnapAlign",
    "scrollSnapStop",
    "scrollMargin",
    "scrollPadding",
    "listStylePosition",
    "listStyleType",
    "appearance",
    "columns",
    "breakBefore",
    "breakInside",
    "breakAfter",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridTemplateColumns",
    "gridTemplateRows",
    "flexDirection",
    "flexWrap",
    "placeContent",
    "placeItems",
    "alignContent",
    "alignItems",
    "justifyContent",
    "justifyItems",
    "gap",
    "space",
    "divideWidth",
    "divideStyle",
    "divideColor",
    "divideOpacity",
    "placeSelf",
    "alignSelf",
    "justifySelf",
    "overflow",
    "overscrollBehavior",
    "scrollBehavior",
    "textOverflow",
    "whitespace",
    "wordBreak",
    "borderRadius",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderOpacity",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundImage",
    "gradientColorStops",
    "boxDecorationBreak",
    "backgroundSize",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundOrigin",
    "fill",
    "stroke",
    "strokeWidth",
    "objectFit",
    "objectPosition",
    "padding",
    "textAlign",
    "textIndent",
    "verticalAlign",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "textTransform",
    "fontStyle",
    "fontVariantNumeric",
    "lineHeight",
    "letterSpacing",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textDecorationColor",
    "textDecorationStyle",
    "textDecorationThickness",
    "textUnderlineOffset",
    "fontSmoothing",
    "placeholderColor",
    "placeholderOpacity",
    "caretColor",
    "accentColor",
    "opacity",
    "backgroundBlendMode",
    "mixBlendMode",
    "boxShadow",
    "boxShadowColor",
    "outlineStyle",
    "outlineWidth",
    "outlineOffset",
    "outlineColor",
    "ringWidth",
    "ringColor",
    "ringOpacity",
    "ringOffsetWidth",
    "ringOffsetColor",
    "blur",
    "brightness",
    "contrast",
    "dropShadow",
    "grayscale",
    "hueRotate",
    "invert",
    "saturate",
    "sepia",
    "filter",
    "backdropBlur",
    "backdropBrightness",
    "backdropContrast",
    "backdropGrayscale",
    "backdropHueRotate",
    "backdropInvert",
    "backdropOpacity",
    "backdropSaturate",
    "backdropSepia",
    "backdropFilter",
    "transitionProperty",
    "transitionDelay",
    "transitionDuration",
    "transitionTimingFunction",
    "willChange",
    "content"
  ],
  "plugins": [
    null
  ],
  "content": {
    "relative": false,
    "files": [
      "components/**/*.{vue,js}",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.{js,ts}",
      "app.vue",
      "error.vue",
      "/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/components/**/*.{vue,js,ts}",
      "/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/layouts/**/*.vue",
      "/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/pages/**/*.vue",
      "/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/composables/**/*.{js,ts}",
      "/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/plugins/**/*.{js,ts}",
      "/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/App.{js,ts,vue}",
      "/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/app.{js,ts,vue}",
      "/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/Error.{js,ts,vue}",
      "/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/error.{js,ts,vue}"
    ],
    "extract": {},
    "transform": {}
  },
  "presets": [],
  "darkMode": "media",
  "variantOrder": [
    "first",
    "last",
    "odd",
    "even",
    "visited",
    "checked",
    "empty",
    "read-only",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled"
  ],
  "prefix": "",
  "important": false,
  "separator": ":",
  "safelist": [],
  "blocklist": []
}