// Функция для запуска счетчика при достижении блока "kp"
function startCounterOnScroll() {
    var counters = document.querySelectorAll('.js-counter');

    // Переменная для отслеживания, был ли счетчик запущен
    var counterStarted = false;

    // Функция для проверки, достиг ли блок "kp"
    function checkIfReached() {
        var kpElement = document.querySelector('.kp');
        var rect = kpElement.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Если блок "kp" виден на экране
        if (rect.top < windowHeight && rect.bottom >= 0 && !counterStarted) {
            // Запускаем счетчик
            startCounter();
            // Устанавливаем флаг, чтобы не запускать счетчик снова
            counterStarted = true;
        }
    }

    // Запускаем проверку при загрузке и прокрутке страницы
    window.addEventListener('load', checkIfReached);
    window.addEventListener('scroll', checkIfReached);
}

// Функция для запуска счетчика
function startCounter() {
    var counters = document.querySelectorAll('.js-counter');

    counters.forEach(counter => {
        var target = +counter.getAttribute('data-target');
        var current = +counter.innerText;
        var increment = target > current ? 1 : -1; // Определяем направление инкремента
        var intervalTime = parseInt(counter.dataset.interval) || 70; // Получаем значение интервала из атрибута или устанавливаем значение по умолчанию

        // Запуск интервала для увеличения счетчика
        var interval = setInterval(() => {
            if (current !== target) {
                current += increment;
                counter.innerText = current;
            } else {
                clearInterval(interval); // Останавливаем интервал, когда достигнуто значение
            }
        }, intervalTime); // Интервал в миллисекундах
    });
}

// Запускаем счетчик при достижении блока "kp"
startCounterOnScroll();


document.addEventListener('DOMContentLoaded', function () {

    // Find the SVG element with id="map-road"
    const svgMapRoad = document.getElementById('map-road');
    setTimeout(function () {

        // If the element is found
        if (svgMapRoad) {
            // Replace the mask element-0
            const maskElement = svgMapRoad.querySelector('#mask1_4207_313');
            if (maskElement) {
                maskElement.outerHTML = `
                    <mask id="mask1_step-1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="0" width="112" height="97">
                        <path d="M1.09586 94.2086L112.111 96.683L112.079 2.47439L1.06348 0L1.09586 94.2086Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-0"
            const gElementStepTwo = svgMapRoad.querySelector('#step-0');
            if (gElementStepTwo) {
                gElementStepTwo.outerHTML = `
                <g id="step-1" mask="url(#mask1_4207_313)">
                    <rect width="111.634" height="97.345" transform="matrix(0.999797 0.0209871 -0.00604327 1.00002 310.075 444.497)" fill="url(#pattern1_4207_313)"/>
                </g>
                `;
            }
        }
    }, 300);

    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-1
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-1');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="310" y="433" width="105" height="122">
                        <path d="M310.494 443.582L320.466 554.176L414.079 543.594L404.106 433L310.494 443.582Z" fill="white"/>
                    </mask>
                                `;
            }

            // Replace the <g> element with id="step-1"
            const gElement = svgMapRoad.querySelector('#step-1');
            if (gElement) {
                gElement.outerHTML = `
                    <g id="step-2" mask="url(#mask1_4207_313)">
                        <rect width="111.634" height="97.345" transform="matrix(0.0911008 0.995859 -0.994408 0.105976 405.602 432.844)" fill="url(#pattern1_4207_313)"/>
                    </g>
                    `;
            }
        }
    }, 500);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-2
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-2');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="321" y="382" width="105" height="122">
                        <path d="M321.494 392.582L331.466 503.176L425.079 492.594L415.106 382L321.494 392.582Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-2"
            const gElement = svgMapRoad.querySelector('#step-2');
            if (gElement) {
                gElement.outerHTML = `
                    <g id="step-3" mask="url(#mask1_4207_313)">
                        <rect width="111.634" height="97.345" transform="matrix(0.0911008 0.995859 -0.994408 0.105976 416.602 381.844)" fill="url(#pattern1_4207_313)"/>
                    </g>
                `;
            }
        }
    }, 500);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-3
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-3');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-4" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="275" y="261" width="134" height="144">
                        <path d="M275.842 305.039L325.516 404.351L408.798 360.313L359.124 261L275.842 305.039Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-3"
            const gElement = svgMapRoad.querySelector('#step-3');
            if (gElement) {
                gElement.outerHTML = `
                    <g id="step-4" mask="url(#mask1_4207_313)">
                        <rect width="111.634" height="97.345" transform="matrix(0.448504 0.8938 -0.887017 0.461821 360.459 260.308)" fill="url(#pattern1_4207_313)"/>
                    </g>
                `;
            }
        }
    }, 700);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-4
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-4');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-5" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="287" y="271" width="111" height="123">
                        <path d="M303.835 271.831L287.347 381.643L380.804 393.52L397.292 283.708L303.835 271.831Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-4"
            const gElement = svgMapRoad.querySelector('#step-4');
            if (gElement) {
                gElement.outerHTML = `
                    <g id="step-5" mask="url(#mask1_4207_313)">
                        <rect width="111.634" height="97.345" transform="matrix(-0.147202 0.989123 -0.991235 -0.132406 398.782 283.91)" fill="url(#pattern1_4207_313)"/>
                    </g>
                `;
            }
        }
    }, 700);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-5
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-5');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-6" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="317" y="199" width="110" height="122">
                        <path d="M333.488 199.135L317 308.946L410.457 320.823L426.945 211.011L333.488 199.135Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-5"
            const gElement = svgMapRoad.querySelector('#step-5');
            if (gElement) {
                gElement.outerHTML = `
                    <g id="step-6" mask="url(#mask1_4207_313)">
                        <rect width="111.634" height="97.345" transform="matrix(-0.147202 0.989123 -0.991235 -0.132406 428.436 211.213)" fill="url(#pattern1_4207_313)"/>
                    </g>
                `;
            }
        }
    }, 900);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-6
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-6');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-7" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="303" y="231" width="110" height="122">
                        <path d="M319.488 231.135L303 340.946L396.457 352.823L412.945 243.011L319.488 231.135Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-6"
            const gElement = svgMapRoad.querySelector('#step-6');
            if (gElement) {
                gElement.outerHTML = `
<g id="step-7" mask="url(#mask1_4207_313)">
<rect width="111.634" height="97.345" transform="matrix(-0.147202 0.989123 -0.991235 -0.132406 414.436 243.213)" fill="url(#pattern1_4207_313)"/>
</g>
                `;
            }
        }
    }, 900);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-7
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-7');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-8" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="314" y="194" width="110" height="122">
                        <path d="M330.488 194.135L314 303.946L407.457 315.823L423.945 206.011L330.488 194.135Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-7"
            const gElement = svgMapRoad.querySelector('#step-7');
            if (gElement) {
                gElement.outerHTML = `
                    <g id="step-8" mask="url(#mask1_4207_313)">
                        <rect width="111.634" height="97.345" transform="matrix(-0.147202 0.989123 -0.991235 -0.132406 425.436 206.213)" fill="url(#pattern1_4207_313)"/>
                    </g>
                `;
            }
        }
    }, 1000);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-8
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-8');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-9" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="307" y="187" width="123" height="136">
                        <path d="M307.995 216.706L340.523 322.878L429.951 293.251L397.424 187.079L307.995 216.706Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-8"
            const gElement = svgMapRoad.querySelector('#step-8');
            if (gElement) {
                gElement.outerHTML = `
                    <g id="step-9" mask="url(#mask1_4207_313)">
                        <rect width="111.634" height="97.345" transform="matrix(0.294172 0.95577 -0.951288 0.30843 398.855 186.618)" fill="url(#pattern1_4207_313)"/>
                    </g>
                `;
            }
        }
    }, 1200);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-9
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-9');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-10" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="300" y="105" width="123" height="136">
                        <path d="M300.698 134.627L333.226 240.799L422.654 211.172L390.127 105L300.698 134.627Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-9"
            const gElement = svgMapRoad.querySelector('#step-9');
            if (gElement) {
                gElement.outerHTML = `
                <g id="step-10" mask="url(#mask1_4207_313)">
                    <rect width="111.634" height="97.345" transform="matrix(0.294172 0.95577 -0.951288 0.30843 391.559 104.539)" fill="url(#pattern1_4207_313)"/>
                </g>
                `;
            }
        }
    }, 1200);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-10
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-10');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-11" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="263" y="58" width="143" height="148">
                        <path d="M263.009 120.777L335.111 205.227L405.356 142.449L333.253 58L263.009 120.777Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-10"
            const gElement = svgMapRoad.querySelector('#step-10');
            if (gElement) {
                gElement.outerHTML = `
                    <g id="step-11" mask="url(#mask1_4207_313)">
                        <rect width="111.634" height="97.345" transform="matrix(0.650321 0.759681 -0.749894 0.661616 334.383 57.0073)" fill="url(#pattern1_4207_313)"/>
                    </g>
                `;
            }
        }
    }, 1400);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-11
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-11');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-12" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="282" y="22" width="110" height="126">
                        <path d="M282.556 38.1991L299.17 147.992L391.975 131.793L375.361 22L282.556 38.1991Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-11"
            const gElement = svgMapRoad.querySelector('#step-11');
            if (gElement) {
                gElement.outerHTML = `
                <g id="step-12" mask="url(#mask1_4207_313)">
                    <rect width="111.634" height="97.345" transform="matrix(0.1509 0.988566 -0.986222 0.165661 376.845 21.7539)" fill="url(#pattern1_4207_313)"/>
                </g>
                `;
            }
        }
    }, 1400);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-12
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-12');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-13" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="321" y="12" width="142" height="131">
                        <path d="M422.576 12.803L321 57.6675L361.003 142.961L462.579 98.0967L422.576 12.803Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-12"
            const gElement = svgMapRoad.querySelector('#step-12');
            if (gElement) {
                gElement.outerHTML = `
                    <g id="step-13" mask="url(#mask1_4207_313)">
                        <rect width="111.634" height="97.345" transform="matrix(-0.914237 0.405221 -0.418848 -0.908099 463.206 99.4634)" fill="url(#pattern1_4207_313)"/>
                    </g>
                `;
            }
        }
    }, 1700);
    setTimeout(function () {

        if (svgMapRoad) {
            // Replace the mask element-13
            const maskElementStepTwo = svgMapRoad.querySelector('#mask1_step-13');
            if (maskElementStepTwo) {
                maskElementStepTwo.outerHTML = `
                    <mask id="mask1_step-14" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="373" y="-8" width="142" height="131">
                        <path d="M474.576 -7.19698L373 37.6675L413.003 122.961L514.579 78.0967L474.576 -7.19698Z" fill="white"/>
                    </mask>
                `;
            }

            // Replace the <g> element with id="step-13"
            const gElement = svgMapRoad.querySelector('#step-13');
            if (gElement) {
                gElement.outerHTML = `
                    <g id="step-14" mask="url(#mask1_4207_313)">
                        <rect width="111.634" height="97.345" transform="matrix(-0.914237 0.405221 -0.418848 -0.908099 515.206 79.4634)" fill="url(#pattern1_4207_313)"/>
                    </g>
                `;
            }
        }
    }, 1900);
});
