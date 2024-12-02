function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate integral with different step size </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate with different divisions", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

    <p>Calculate the integral with different step size using trapaziodal rule and estimate the error by comparing with exact solution.<p>
        <br>
        <p >Upper limit (x<sub>2</sub>) = 0.8 and lower limit (x<sub>2</sub>) = 0</p>
        <p style='text-align: center;'><span style='font-style: 25px;'>$$ h = \\frac{x_2 - x_1}{no. of divisions}  $$</span></p>

        <br>
        <p>For number of divisions  = 1</p>
        <p style='text-align: center;'><span style='font-style: 25px;'>$$ h_1 \\ = \\ 0.8 $$</span></p>
        <p style='text-align: center;'><span style='font-style: 25px;'>$$ I_1 \\ = \\ \\frac{h_1}{2} (f(x_1) + f(x_1 + h_1))  $$</span></p>

        <br>
        <p>For number of divisions  = 2</p>
        <p style='text-align: center;'><span style='font-style: 25px;'>$$ h_2 \\ = \\ 0.4 $$</span></p>
        <p style='text-align: center;'><span style='font-style: 25px;'>$$ I_2 = \\frac{h_2}{2} (f(x_1) + 2f(x_1 + h_2) + f(x_1 + 2h_2))  $$</span></p>

        <br>
        <p>For number of divisions  = 4</p>
        <p style='text-align: center;'><span style='font-style: 25px;'>$$ h_3 \\ = \\ 0.2 $$</span></p>
        <p style='text-align: center;'><span style='font-style: 25px;'>$$ I_3 = \\frac{h_3}{2} (f(x_1) + 2f(x_1 + h_3) + 2f(x_1 + 2h_3) + 2f(x_1 + 3h_3) + f(x_1 + 4h_3)) $$</span></p>

        <br>
        <p>For calculating error</p>
        <p style='text-align: center;'><span style='font-style: 25px;'>$$ percent \\ error \\ = \\ \\left | \\frac{exact \\ integral \\ value - I}{exact \\ integral \\ value} \\right | * 100  $$</span></p>

        <br>
        <p>Now Calculate the corresponding I and error values in table using equaitons above.</p>



        <div style='text-align: center;'>
            <div id='a2-tab'></div>
            <br>

        </div>
        <br>

    </div>

    `;
    maindiv.innerHTML += text;
    show_step('tb2-box');
    table_calculations();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function table_calculations() {
    let ele = document.getElementById('a2-tab');
    let header = ['Number of divisions', 'Step Size (h)', "Integral", '%Error'];
    tb_data = [
        [1, `h<sub>1</sub> = 0.8`, trap(1), calculate_error_percent(ei, trap(1))],
        [2, `h<sub>2</sub> = 0.4`, trap(2), calculate_error_percent(ei, trap(2))],
        [4, `h<sub>3</sub> = 0.2`, trap(4), calculate_error_percent(ei, trap(4))]
    ];
    let tb = new Verify_Rows_Cols_Strings(header, tb_data, [0, 1, 2], [[2, 3], [2, 3], [2, 3]], '', ele, true, true, activity3);
    tb.load_table();
}
function verify_ei2() {
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
//# sourceMappingURL=activity2.js.map