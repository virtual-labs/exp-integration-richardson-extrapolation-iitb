function activity3() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Use Richardson extrapolation and calculate error</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Use Richardson Extrapolation", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <div>

            Case 1: Using Richardson exptrapolation for <span style='display: inline-block;'>$$ h_2 \\ = \\ \\frac{h_1}{2} $$</span>

            <p style='text-align: center;'><span style='display: inline-block;'>$$ I \\ = \\ \\frac{4}{3}I_2 - \\frac{1}{3}I_1 $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='r1-inp' > <span id='r1-val-sp'></span></p>

            <br><br>

            Case 2: Using Richardson exptrapolation for <span style='display: inline-block;'>$$ h_3 \\ = \\ \\frac{h_2}{2} $$</span>

            <p style='text-align: center;'><span style='display: inline-block;'>$$ I \\ = \\ \\frac{4}{3}I_3 - \\frac{1}{3}I_2 $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='r2-inp' > <span id='r2-val-sp'></span></p>

        </div>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_ei3();'  id='temp-btn-124' >Next</button></div>

        <div id='a3-tab' style='text-align: center;'></div>
        <br>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb3-box');
    calculate_ri();
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
function calculate_ri() {
    r1 = (4 / 3) * trap(2) - (1 / 3) * trap(1);
    r2 = (4 / 3) * trap(4) - (1 / 3) * trap(2);
}
function verify_ei3() {
    let btn = document.getElementById('temp-btn-124');
    console.log(`r1 = ${r1}, r2 = ${r2}`);
    let inp1 = document.getElementById('r1-inp');
    let sp1 = document.getElementById('r1-val-sp');
    let inp2 = document.getElementById('r2-inp');
    let sp2 = document.getElementById('r2-val-sp');
    if (!verify_values(parseFloat(inp1.value), r1)) {
        alert('First value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), r2)) {
        alert('Second value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${r1.toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${r2.toFixed(4)}`;
    load_case_table();
    setTimeout(() => { MathJax.typeset(); }, 300);
    //activity2();
}
function load_case_table() {
    let ele = document.getElementById('a3-tab');
    let header = ['Case', 'I', 'Error'];
    tb2_data = [
        [`<span style='text-align: center;'>$$ h_2 = \\frac{h_1}{2} $$</span>`, `${r1.toFixed(4)}`, calculate_error_percent(ei, r1)],
        [`<span style='text-align: center;'>$$ h_3 = \\frac{h_2}{2} $$</span>`, `${r2.toFixed(4)}`, calculate_error_percent(ei, r2)]
    ];
    e1 = calculate_error_percent(ei, r1);
    e2 = calculate_error_percent(ei, r2);
    let tb = new Verify_Rows_Cols_Strings(header, tb2_data, [0, 1], [[2], [2]], '', ele, true, true, activity4);
    tb.load_table();
}
//# sourceMappingURL=activity3.js.map