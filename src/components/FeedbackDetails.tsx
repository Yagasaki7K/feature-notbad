import styled from "styled-components";

const FeedbackDetails = styled.div`
    body {
        background: var(--color-bg);
    }

    .container {
        max-width: 380px;
        margin: 0 auto;
        display: block;
        padding: 16px 24px;
    }

    .facebox header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .facebox .title {
        padding: 16px;
        transition: 200ms;
        text-align: center;
    }

    .facebox .title h1 {
        font-size: 24px;
        font-weight: 400;
        word-spacing: 0px;
    }

    .facebox .actions {
        position: relative;
        padding: 0 14px;
    }

    .facebox .actions button[type=submit] {
        position: absolute;
        right: 14px;
        top: 0;
    }

    .facebox .actions:focus-within textarea {
        height: 136px;
        max-height: unset;
    }

    .facebox .actions:focus-within button[type=submit] {
        top: unset;
        bottom: 8px;
        right: 20px;
    }

    [data-clean=true] .title,
    [data-submitted=true] .title {
        margin-top: -90px;
        visibility: hidden;
        transition: 200ms;
        opacity: 0;
    }

    [data-clean=true] .face-draw .face-label,
    [data-clean=true] #main-form .range,
    [data-submitted=true] .face-draw .face-label,
    [data-submitted=true] #main-form .range {
        transform: translateX(-100px);
        visibility: hidden;
        transition: 200ms;
        opacity: 0;
    }

    [data-clean=true] .actions {
        transform: translateY(-180px);
        transition: 400ms;
    }

    [data-submitted=true] .actions {
        opacity: 0;
        visibility: none;
    }

    [data-submitted=true] form#main-form {
        display: none;
    }

    .submitted {
        text-align: center;
        transform: translateY(-90px);
    }

    .submitted .submitted__message h2 {
        font-size: 32px;
        font-weight: 700;
        margin: 0;
        margin-bottom: 16px;
        color: var(--color-face);
        animation: fadeInUp 200ms linear forwards;
    }

    .submitted .submitted__message p {
        margin: 0;
        margin-bottom: 100px;
        color: var(--color-face);
        animation: fadeInUp 200ms linear forwards;
    }

    .submitted .submitted__actions button {
        display: flex;
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        .container {
            padding: 10px;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(80px);
        }

        to {
            opacity: 1;
            transform: none;
        }
    }

    // 
    
    button {
        background: rgba(100, 100, 100, .2);
        border: none;
        margin: 0;
        min-height: 48px;
        line-height: 0;
        padding: 0;
        cursor: pointer;
        transition: 200ms;
        color: #444;
        padding: 0 16px;
        border-radius: 25px;
        text-align: center;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        font-size: 16px;
    }

    button img {
        height: 18px;
    }

    button:hover {
        background: rgba(100, 100, 100, .4);
    }

    button.button--rounded {
        height: 48px;
        width: 48px;
        border-radius: 100%;
        padding: 0;
    }

    /* solid */

    button.button--solid {
        color: #fafafa;
        background: var(--color-face);
    }

    button.button--solid:hover {
        background: var(--color-face);
        filter: brightness(1.3);
    }

    //

    .face-draw {
        margin-bottom: 24px;
    }

    .face-draw__shape {
        max-width: 280px;
        margin: 0 auto;
        display: block;
    }

    /* eyes */

    .face-draw__shape .face-draw__shape__eyes {
        display: flex;
        gap: 20px;
        height: 130px;
        justify-content: center;
        align-items: center;
    }

    .face-draw__shape .face-draw__shape__eyes span {
        background: var(--color-face);
        height: 130px;
        display: block;
        width: 130px;
        border-radius: 100%;
        transition: 400ms;
    }

    /* mouth */

    .face-draw__shape .face-draw__shape__mouth {
        margin-top: -40px;
        transition: 400ms;
    }

    .face-draw__shape .face-draw__shape__mouth span {
        width: 76px;
        height: 95px;
        display: block;
        border-radius: 50%;
        position: relative;
        margin: 0 auto;
        unicode-bidi: isolate;
        transform: rotateX(52deg);
        background:
            linear-gradient(var(--color-bg), var(--color-bg)) top / 100% 50px no-repeat,
            radial-gradient(farthest-side, transparent calc(99% - 20px), var(--color-face) calc(100% - 20px));
    }

    .face-draw__shape .face-draw__shape__mouth span::before,
    .face-draw__shape .face-draw__shape__mouth span::after {
        content: "";
        width: 20px;
        height: 20px;
        right: 0;
        position: absolute;
        top: calc(50% - 8px);
        transform: rotate(calc(var(80deg, 0deg) - 50deg));
        background: radial-gradient(circle closest-side, var(--color-face) 99%, transparent) -10px 0 / 200% 100%;
    }

    .face-draw__shape .face-draw__shape__mouth span::before {
        right: calc(100% - 20px);
    }

    /* label */

    .face-draw .face-label {
        overflow: hidden;
        transition: 200ms;
    }

    .face-draw .face-label__slider {
        width: 100%;
        display: flex;
        align-items: center;
        transition: 200ms;
        flex-direction: row-reverse;
    }

    .face-draw .face-label .face-label__slide {
        max-width: 100%;
        min-width: 100%;
        display: block;
        text-align: center;
        padding: 16px 0;
    }

    .face-draw .face-label .face-label__slide > p {
        margin: 0;
        font-size: 64px;
        font-weight: bold;
        letter-spacing: -4px;
        color: var(--color-label);
    }

    //

    .container {
        max-width: 380px;
        margin: 0 auto;
        display: block;
        padding: 16px 24px;
    }

    .facebox header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .facebox .title {
        padding: 16px;
        transition: 200ms;
        text-align: center;
    }

    .facebox .title h1 {
        font-size: 24px;
        font-weight: 400;
    }

    .facebox .actions {
        position: relative;
        padding: 0 14px;
    }

    .facebox .actions button[type=submit] {
        position: absolute;
        right: 14px;
        top: 0;
    }

    .facebox .actions:focus-within textarea {
        height: 136px;
        max-height: unset;
    }

    .facebox .actions:focus-within button[type=submit] {
        top: unset;
        bottom: 8px;
        right: 20px;
    }

    [data-clean=true] .title,
    [data-submitted=true] .title {
        margin-top: -90px;
        visibility: hidden;
        transition: 200ms;
        opacity: 0;
    }

    [data-clean=true] .face-draw .face-label,
    [data-clean=true] #main-form .range,
    [data-submitted=true] .face-draw .face-label,
    [data-submitted=true] #main-form .range {
        transform: translateX(-100px);
        visibility: hidden;
        transition: 200ms;
        opacity: 0;
    }

    [data-clean=true] .actions {
        transform: translateY(-180px);
        transition: 400ms;
    }

    [data-submitted=true] .actions {
        opacity: 0;
        visibility: none;
    }

    [data-submitted=true] form#main-form {
        display: none;
    }

    .submitted {
        text-align: center;
        transform: translateY(-90px);
    }

    .submitted .submitted__message h2 {
        font-size: 32px;
        font-weight: 700;
        margin: 0;
        margin-bottom: 16px;
        color: var(--color-face);
        animation: fadeInUp 200ms linear forwards;
    }

    .submitted .submitted__message p {
        margin: 0;
        margin-bottom: 100px;
        color: var(--color-face);
        animation: fadeInUp 200ms linear forwards;
    }

    .submitted .submitted__actions button {
        display: flex;
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        .container {
            padding: 10px;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(80px);
        }

        to {
            opacity: 1;
            transform: none;
        }
    }

    //

    [data-mood="not-bad"] {
        --color-bg: #FDC959;
        --color-label: #CF7330;
    }

    [data-mood="not-bad"] .face-draw__shape .face-draw__shape__eyes span {
        height: 18px;
        width: 120px;
        border-radius: 25px;
    }

    [data-mood="not-bad"] .face-draw__shape .face-draw__shape__mouth {
        transform: rotate(-180deg) translateY(10px);
    }

    [data-mood="not-bad"] .face-label__slider {
        transform: translateX(100%);
    }

    [data-mood="not-bad"] .range .range__input input::-webkit-slider-thumb {
        transform: rotate(-180deg);
    }

    [data-mood="not-bad"] .range .range__input input::-moz-range-thumb {
        transform: rotate(-180deg);
    }

    /* BAD */

    [data-mood="bad"] {
        --color-bg: #ffbfbf;
        --color-label: #FF6868;
        --color-face: #640000;
    }

    [data-mood="bad"] .face-draw__shape .face-draw__shape__eyes span {
        height: 66px;
        width: 66px;
        margin: 16px;
    }

    [data-mood="bad"] .face-draw__shape .face-draw__shape__eyes span:first-of-type {
        transform: rotate(-90deg);
    }

    [data-mood="bad"] .face-draw__shape .face-draw__shape__eyes span:last-of-type {
        transform: rotate(90deg);
    }

    [data-mood="bad"] .face-draw__shape .face-draw__shape__mouth {
        transform: rotate(-180deg) translateY(10px);
    }

    [data-mood="bad"] .face-label__slider {
        transform: translateX(200%);
    }

    [data-mood="bad"] .range .range__input input::-webkit-slider-thumb {
        transform: rotate(-180deg);
    }

    [data-mood="bad"] .range .range__input input::-moz-range-thumb {
        transform: rotate(-180deg);
    }

    //

    html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
    }

    body {
        margin: 0;
    }

    main {
        display: block;
    }

    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
    }

    pre {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
    }

    a {
        background: transparent;
    }

    abbr[title] {
        border-bottom: none; /* 1 */
        text-decoration: underline; /* 2 */
        text-decoration: underline dotted; /* 2 */
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }

    button,
    input { /* 1 */
        overflow: visible;
    }

    button,
    select { /* 1 */
        text-transform: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        padding: 0; /* 3 */
        white-space: normal; /* 1 */
    }

    progress {
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
    }

    [type="search"]::-webkit-search-decoration {
        appearance: none;
    }

    ::-webkit-file-upload-button {
        appearance: button; /* 1 */
        font: inherit; /* 2 */
    }

    details {
        display: block;
    }

    summary {
        display: list-item;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none;
    }

    //

    .actions textarea {
        background: rgba(100, 100, 100, .2);
        border: none;
        margin: 0;
        transition: 200ms;
        padding: 16px;
        border-radius: 25px;
        font-size: 16px;
        resize: none;
        width: 100%;
        display: block;
        transition: 200ms;
        height: 48px;
        white-space: pre;
        color: rgba(100, 100, 100, .3);
        overflow-y: hidden;
    }

    .actions textarea:active,
    .actions textarea:focus-visible {
        color: #444;
        white-space: initial;
        outline: solid 2px rgba(100, 100, 100, .3);
    }

    //

    .range {
        max-width: 300px;
        margin: 0 auto;
        transition: 200ms;
        padding-bottom: 100px;
    }

    .range .range__input {
        position: relative;
    }

    .range .range__input input {
        top: 50%;
        width: 100%;
        appearance: none;
        position: absolute;
        transition: 200ms;
        transform: translateY(-50%);
        -webkit-appearance: none;
        background: transparent;
        cursor: pointer;
    }

    .range .range__input__bullets span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        border-radius: 100%;  
        background: var(--color-label);
    }

    .range .range__input__bullets::before {
        content: "";
        width: 100%;
        height: 6px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: var(--color-label);
    }

    .range .range__input__bullets span {
        left: calc(50% - (24px / 2));
        /* transform: translate(-50%, -50%); */
    }

    .range .range__input__bullets span:first-of-type {
        left: 0;
    }

    .range .range__input__bullets span:last-of-type {
        right: 0;
        left: unset;
    }

    .range .range__input__bullets span::after {
        content: attr(data-label);
        white-space: nowrap;
        position: absolute;
        bottom: -28px;
        left: 50%;
        font-size: 14px;
        transform: translateX(-50%);
        color: var(--color-label);
        filter: brightness(.6);  
    }

    .range .range__input input::-webkit-slider-thumb {
        appearance: none;
        appearance: none;
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: 200ms;
        border-radius: 100%;
        background: var(--color-face);
        background-image: url(/icons/smile.svg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center -3px;
    }

    .range .range__input input::-moz-range-thumb {
        appearance: none;
        appearance: none;
        width: 30px;
        height: 30px;
        transition: 200ms;
        cursor: pointer;
        border-radius: 100%;
        background: var(--color-face);
        background-image: url(/icons/smile.svg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center -3px;
    }
`

export default FeedbackDetails