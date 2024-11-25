function activity4() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Use Richardson extrapolation and calculate error</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act4();' id='temp-btn-41' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act4() {
    let temp_btn = document.getElementById('temp-btn-41');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate and Compare with Exact Integral", "tb4-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb4-box'>

        <div>

            <p style='text-align: center;'>More accurate estimate <span style='display: inline-block;'>$$ I_m $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='im-inp' > <span id='im-val-sp'></span></p>

            <br><br>

            <p style='text-align: center;'>Less accurate estimate <span style='display: inline-block;'>$$ I_l $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='il-inp' > <span id='il-val-sp'></span></p>

        </div>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_4();'  id='temp-btn-1245' >Verify</button></div>

        <div id='er-1' style='display: none;'>
            <p style='text-align: center;'><span style='display: inline-block;'>$$ I = \\frac{16I_m}{15} - \\frac{I_l}{15} $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='final-inp' > <span id='final-val-sp'></span></p>
            <br>
            <p>By comparing with solution estimate the error</p>
            <br>
            <p style='text-align: center;'>error = <span style='display: inline-block;'>$$ \\frac{exact \\ value - I}{exact \\ value} $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='err-inp' > <span id='err-val-sp'></span></p>

            <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='calculate_final();'  id='temp-btn-1246' >Verify</button></div>
        </div>

       


        <br>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb4-box');
    calculate_4();
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
function calculate_4() {
    if (e2 >= e1) {
        im = r1;
        il = r2;
    }
    else {
        il = r1;
        im = r2;
    }
}
function verify_4() {
    let btn = document.getElementById('temp-btn-1245');
    console.log(`Im = ${im}, Il = ${il}`);
    let inp1 = document.getElementById('im-inp');
    let sp1 = document.getElementById('im-val-sp');
    let inp2 = document.getElementById('il-inp');
    let sp2 = document.getElementById('il-val-sp');
    if (!verify_values(parseFloat(inp1.value), im)) {
        alert('Im value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), il)) {
        alert('Il value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${im.toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${il.toFixed(4)}`;
    load_next_a4();
    //activity2();
}
function load_next_a4() {
    final_I = (16 / 15) * im - (1 / 15) * il;
    final_err = parseFloat(calculate_error_percent(ei, final_I).toFixed(5));
    let ele = document.getElementById('er-1');
    ele.style.display = 'block';
}
function calculate_final() {
    let btn = document.getElementById('temp-btn-1246');
    console.log(`I = ${final_I}, %error = ${final_err}`);
    let inp1 = document.getElementById('final-inp');
    let sp1 = document.getElementById('final-val-sp');
    let inp2 = document.getElementById('err-inp');
    let sp2 = document.getElementById('err-val-sp');
    if (!verify_values(parseFloat(inp1.value), final_I)) {
        alert('I value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), final_err)) {
        alert('error value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${final_I.toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${final_err.toFixed(4)}`;
}
//# sourceMappingURL=activity4.js.map