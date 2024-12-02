let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Richardson Extrapolation for Integration</h5>
        <p>Learning Objective: Calculate exact integral value </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate exact integral", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div style='text-align: center;'>
            <p style='text-align: center;'><span style='font-style: 25px;'>
                $$ f(x) \\ = \\ ${random_val} + 25x - 200x^2 + 675x^3 - 900x^4 + 400x^5  $$
            </span></p>
            <p style='text-align: center;'><span style='font-style: 25px;'>
                $$  \\int_{0}^{0.8}f(x)dx \\ = \\ \\int_{0}^{0.8}(${random_val} + 25x - 200x^2 + 675x^3 - 900x^4 + 400x^5) \\ dx $$
            </span></p>
            
            <div style='text-align: center;'>Exact integral value = <input type='number' class='form-control' style='display: inline !important; width: 130px;' id='ei-inp' > <span id='ei-val-sp'></span></div>

        </div>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_ei();'  id='temp-btn-1234' >Next</button></div>

        <div id='piv-inp-div' style='text-align: center;'></div>
        <br>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    calculate_ei();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
// function show_xy() {
//     let div: HTMLDivElement = <HTMLDivElement> document.getElementById('piv-inp-div');
//     let header = ['x'];
//     tb_data = [['y']]
//     for(let i=0; i<7; i++) {
//         header.push(`${x+i}`);
//         tb_data[0].push(y_vals[i]);
//     }
//     let tb = new Verify_Table(header, tb_data, 0, [1, 2, 3, 4, 5, 6, 7], y_vals, "", div, true, activity2);
//     tb.load_table();
// }   
function calculate_ei() {
    let ul = 0.8;
    ei = random_val * ul + (25 / 2) * (Math.pow(ul, 2)) - (200 / 3) * (Math.pow(ul, 3)) + (675 / 4) * (Math.pow(ul, 4)) - (900 / 5) * (Math.pow(ul, 5)) + (400 / 6) * (Math.pow(ul, 6));
    return ei;
}
function verify_ei() {
    let btn = document.getElementById('temp-btn-1234');
    console.log(`exact integral value => ${ei}`);
    let inp = document.getElementById('ei-inp');
    let sp = document.getElementById('ei-val-sp');
    if (!verify_values(parseFloat(inp.value), ei)) {
        alert('Exact integral value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${ei.toFixed(4)}`;
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map