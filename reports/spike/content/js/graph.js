/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 357.0, "minX": 0.0, "maxY": 2221.0, "series": [{"data": [[0.0, 357.0], [0.1, 357.0], [0.2, 358.0], [0.3, 358.0], [0.4, 359.0], [0.5, 359.0], [0.6, 359.0], [0.7, 364.0], [0.8, 364.0], [0.9, 364.0], [1.0, 366.0], [1.1, 366.0], [1.2, 366.0], [1.3, 366.0], [1.4, 367.0], [1.5, 367.0], [1.6, 368.0], [1.7, 368.0], [1.8, 368.0], [1.9, 368.0], [2.0, 369.0], [2.1, 369.0], [2.2, 370.0], [2.3, 370.0], [2.4, 370.0], [2.5, 374.0], [2.6, 374.0], [2.7, 374.0], [2.8, 374.0], [2.9, 375.0], [3.0, 375.0], [3.1, 376.0], [3.2, 376.0], [3.3, 376.0], [3.4, 376.0], [3.5, 380.0], [3.6, 380.0], [3.7, 381.0], [3.8, 381.0], [3.9, 381.0], [4.0, 381.0], [4.1, 381.0], [4.2, 382.0], [4.3, 382.0], [4.4, 382.0], [4.5, 382.0], [4.6, 382.0], [4.7, 382.0], [4.8, 383.0], [4.9, 383.0], [5.0, 383.0], [5.1, 383.0], [5.2, 385.0], [5.3, 385.0], [5.4, 386.0], [5.5, 386.0], [5.6, 386.0], [5.7, 386.0], [5.8, 386.0], [5.9, 386.0], [6.0, 387.0], [6.1, 387.0], [6.2, 387.0], [6.3, 387.0], [6.4, 387.0], [6.5, 387.0], [6.6, 387.0], [6.7, 387.0], [6.8, 388.0], [6.9, 388.0], [7.0, 388.0], [7.1, 388.0], [7.2, 388.0], [7.3, 388.0], [7.4, 390.0], [7.5, 390.0], [7.6, 390.0], [7.7, 390.0], [7.8, 391.0], [7.9, 391.0], [8.0, 391.0], [8.1, 391.0], [8.2, 391.0], [8.3, 391.0], [8.4, 391.0], [8.5, 391.0], [8.6, 392.0], [8.7, 392.0], [8.8, 395.0], [8.9, 395.0], [9.0, 395.0], [9.1, 395.0], [9.2, 395.0], [9.3, 395.0], [9.4, 395.0], [9.5, 395.0], [9.6, 396.0], [9.7, 396.0], [9.8, 397.0], [9.9, 397.0], [10.0, 397.0], [10.1, 397.0], [10.2, 398.0], [10.3, 398.0], [10.4, 399.0], [10.5, 399.0], [10.6, 399.0], [10.7, 399.0], [10.8, 400.0], [10.9, 400.0], [11.0, 400.0], [11.1, 400.0], [11.2, 401.0], [11.3, 401.0], [11.4, 401.0], [11.5, 401.0], [11.6, 402.0], [11.7, 402.0], [11.8, 404.0], [11.9, 404.0], [12.0, 404.0], [12.1, 404.0], [12.2, 404.0], [12.3, 404.0], [12.4, 406.0], [12.5, 406.0], [12.6, 407.0], [12.7, 407.0], [12.8, 409.0], [12.9, 409.0], [13.0, 411.0], [13.1, 411.0], [13.2, 411.0], [13.3, 411.0], [13.4, 412.0], [13.5, 412.0], [13.6, 412.0], [13.7, 412.0], [13.8, 416.0], [13.9, 416.0], [14.0, 416.0], [14.1, 416.0], [14.2, 416.0], [14.3, 416.0], [14.4, 417.0], [14.5, 417.0], [14.6, 419.0], [14.7, 419.0], [14.8, 420.0], [14.9, 420.0], [15.0, 421.0], [15.1, 421.0], [15.2, 421.0], [15.3, 421.0], [15.4, 421.0], [15.5, 421.0], [15.6, 423.0], [15.7, 423.0], [15.8, 425.0], [15.9, 425.0], [16.0, 425.0], [16.1, 425.0], [16.2, 426.0], [16.3, 426.0], [16.4, 427.0], [16.5, 427.0], [16.6, 427.0], [16.7, 427.0], [16.8, 427.0], [16.9, 427.0], [17.0, 428.0], [17.1, 428.0], [17.2, 428.0], [17.3, 428.0], [17.4, 428.0], [17.5, 428.0], [17.6, 428.0], [17.7, 428.0], [17.8, 430.0], [17.9, 430.0], [18.0, 430.0], [18.1, 430.0], [18.2, 431.0], [18.3, 431.0], [18.4, 431.0], [18.5, 431.0], [18.6, 432.0], [18.7, 432.0], [18.8, 432.0], [18.9, 432.0], [19.0, 432.0], [19.1, 432.0], [19.2, 433.0], [19.3, 433.0], [19.4, 433.0], [19.5, 433.0], [19.6, 433.0], [19.7, 433.0], [19.8, 434.0], [19.9, 434.0], [20.0, 434.0], [20.1, 434.0], [20.2, 435.0], [20.3, 435.0], [20.4, 436.0], [20.5, 436.0], [20.6, 436.0], [20.7, 436.0], [20.8, 436.0], [20.9, 436.0], [21.0, 437.0], [21.1, 437.0], [21.2, 437.0], [21.3, 437.0], [21.4, 437.0], [21.5, 437.0], [21.6, 437.0], [21.7, 437.0], [21.8, 437.0], [21.9, 437.0], [22.0, 437.0], [22.1, 437.0], [22.2, 438.0], [22.3, 438.0], [22.4, 438.0], [22.5, 438.0], [22.6, 438.0], [22.7, 438.0], [22.8, 438.0], [22.9, 438.0], [23.0, 439.0], [23.1, 439.0], [23.2, 439.0], [23.3, 439.0], [23.4, 439.0], [23.5, 439.0], [23.6, 439.0], [23.7, 439.0], [23.8, 440.0], [23.9, 440.0], [24.0, 440.0], [24.1, 440.0], [24.2, 440.0], [24.3, 440.0], [24.4, 440.0], [24.5, 440.0], [24.6, 440.0], [24.7, 440.0], [24.8, 441.0], [24.9, 441.0], [25.0, 441.0], [25.1, 441.0], [25.2, 441.0], [25.3, 441.0], [25.4, 441.0], [25.5, 441.0], [25.6, 441.0], [25.7, 441.0], [25.8, 442.0], [25.9, 442.0], [26.0, 442.0], [26.1, 442.0], [26.2, 442.0], [26.3, 442.0], [26.4, 443.0], [26.5, 443.0], [26.6, 443.0], [26.7, 443.0], [26.8, 443.0], [26.9, 443.0], [27.0, 443.0], [27.1, 443.0], [27.2, 443.0], [27.3, 443.0], [27.4, 443.0], [27.5, 443.0], [27.6, 443.0], [27.7, 443.0], [27.8, 443.0], [27.9, 443.0], [28.0, 444.0], [28.1, 444.0], [28.2, 444.0], [28.3, 444.0], [28.4, 445.0], [28.5, 445.0], [28.6, 445.0], [28.7, 445.0], [28.8, 446.0], [28.9, 446.0], [29.0, 446.0], [29.1, 446.0], [29.2, 446.0], [29.3, 446.0], [29.4, 446.0], [29.5, 446.0], [29.6, 446.0], [29.7, 446.0], [29.8, 447.0], [29.9, 447.0], [30.0, 447.0], [30.1, 447.0], [30.2, 449.0], [30.3, 449.0], [30.4, 449.0], [30.5, 449.0], [30.6, 450.0], [30.7, 450.0], [30.8, 450.0], [30.9, 450.0], [31.0, 450.0], [31.1, 450.0], [31.2, 451.0], [31.3, 451.0], [31.4, 452.0], [31.5, 452.0], [31.6, 452.0], [31.7, 452.0], [31.8, 453.0], [31.9, 453.0], [32.0, 453.0], [32.1, 453.0], [32.2, 453.0], [32.3, 453.0], [32.4, 454.0], [32.5, 454.0], [32.6, 454.0], [32.7, 454.0], [32.8, 455.0], [32.9, 455.0], [33.0, 456.0], [33.1, 456.0], [33.2, 456.0], [33.3, 456.0], [33.4, 456.0], [33.5, 456.0], [33.6, 457.0], [33.7, 457.0], [33.8, 457.0], [33.9, 457.0], [34.0, 457.0], [34.1, 457.0], [34.2, 457.0], [34.3, 457.0], [34.4, 457.0], [34.5, 457.0], [34.6, 458.0], [34.7, 458.0], [34.8, 458.0], [34.9, 458.0], [35.0, 459.0], [35.1, 459.0], [35.2, 459.0], [35.3, 459.0], [35.4, 459.0], [35.5, 459.0], [35.6, 460.0], [35.7, 460.0], [35.8, 460.0], [35.9, 460.0], [36.0, 460.0], [36.1, 460.0], [36.2, 461.0], [36.3, 461.0], [36.4, 462.0], [36.5, 462.0], [36.6, 462.0], [36.7, 462.0], [36.8, 462.0], [36.9, 462.0], [37.0, 462.0], [37.1, 462.0], [37.2, 462.0], [37.3, 462.0], [37.4, 463.0], [37.5, 463.0], [37.6, 463.0], [37.7, 463.0], [37.8, 464.0], [37.9, 464.0], [38.0, 465.0], [38.1, 465.0], [38.2, 465.0], [38.3, 465.0], [38.4, 466.0], [38.5, 466.0], [38.6, 466.0], [38.7, 466.0], [38.8, 466.0], [38.9, 466.0], [39.0, 466.0], [39.1, 466.0], [39.2, 467.0], [39.3, 467.0], [39.4, 467.0], [39.5, 467.0], [39.6, 467.0], [39.7, 467.0], [39.8, 467.0], [39.9, 467.0], [40.0, 467.0], [40.1, 467.0], [40.2, 467.0], [40.3, 467.0], [40.4, 467.0], [40.5, 467.0], [40.6, 468.0], [40.7, 468.0], [40.8, 468.0], [40.9, 468.0], [41.0, 468.0], [41.1, 468.0], [41.2, 469.0], [41.3, 469.0], [41.4, 472.0], [41.5, 472.0], [41.6, 472.0], [41.7, 472.0], [41.8, 474.0], [41.9, 474.0], [42.0, 474.0], [42.1, 474.0], [42.2, 474.0], [42.3, 474.0], [42.4, 474.0], [42.5, 474.0], [42.6, 476.0], [42.7, 476.0], [42.8, 476.0], [42.9, 476.0], [43.0, 477.0], [43.1, 477.0], [43.2, 478.0], [43.3, 478.0], [43.4, 479.0], [43.5, 479.0], [43.6, 479.0], [43.7, 479.0], [43.8, 480.0], [43.9, 480.0], [44.0, 480.0], [44.1, 480.0], [44.2, 480.0], [44.3, 480.0], [44.4, 481.0], [44.5, 481.0], [44.6, 481.0], [44.7, 481.0], [44.8, 481.0], [44.9, 481.0], [45.0, 481.0], [45.1, 481.0], [45.2, 481.0], [45.3, 481.0], [45.4, 481.0], [45.5, 481.0], [45.6, 481.0], [45.7, 481.0], [45.8, 482.0], [45.9, 482.0], [46.0, 482.0], [46.1, 482.0], [46.2, 482.0], [46.3, 482.0], [46.4, 482.0], [46.5, 482.0], [46.6, 483.0], [46.7, 483.0], [46.8, 483.0], [46.9, 483.0], [47.0, 483.0], [47.1, 483.0], [47.2, 483.0], [47.3, 483.0], [47.4, 483.0], [47.5, 483.0], [47.6, 483.0], [47.7, 483.0], [47.8, 484.0], [47.9, 484.0], [48.0, 484.0], [48.1, 484.0], [48.2, 484.0], [48.3, 484.0], [48.4, 485.0], [48.5, 485.0], [48.6, 485.0], [48.7, 485.0], [48.8, 485.0], [48.9, 485.0], [49.0, 485.0], [49.1, 485.0], [49.2, 486.0], [49.3, 486.0], [49.4, 486.0], [49.5, 486.0], [49.6, 487.0], [49.7, 487.0], [49.8, 487.0], [49.9, 487.0], [50.0, 487.0], [50.1, 487.0], [50.2, 487.0], [50.3, 487.0], [50.4, 490.0], [50.5, 490.0], [50.6, 494.0], [50.7, 494.0], [50.8, 494.0], [50.9, 494.0], [51.0, 495.0], [51.1, 495.0], [51.2, 496.0], [51.3, 496.0], [51.4, 497.0], [51.5, 497.0], [51.6, 497.0], [51.7, 497.0], [51.8, 497.0], [51.9, 497.0], [52.0, 498.0], [52.1, 498.0], [52.2, 498.0], [52.3, 498.0], [52.4, 498.0], [52.5, 498.0], [52.6, 499.0], [52.7, 499.0], [52.8, 499.0], [52.9, 499.0], [53.0, 499.0], [53.1, 499.0], [53.2, 500.0], [53.3, 500.0], [53.4, 500.0], [53.5, 500.0], [53.6, 501.0], [53.7, 501.0], [53.8, 501.0], [53.9, 501.0], [54.0, 501.0], [54.1, 501.0], [54.2, 501.0], [54.3, 501.0], [54.4, 501.0], [54.5, 501.0], [54.6, 501.0], [54.7, 501.0], [54.8, 501.0], [54.9, 501.0], [55.0, 501.0], [55.1, 501.0], [55.2, 502.0], [55.3, 502.0], [55.4, 502.0], [55.5, 502.0], [55.6, 502.0], [55.7, 502.0], [55.8, 502.0], [55.9, 502.0], [56.0, 503.0], [56.1, 503.0], [56.2, 503.0], [56.3, 503.0], [56.4, 503.0], [56.5, 503.0], [56.6, 503.0], [56.7, 503.0], [56.8, 503.0], [56.9, 503.0], [57.0, 504.0], [57.1, 504.0], [57.2, 504.0], [57.3, 504.0], [57.4, 504.0], [57.5, 504.0], [57.6, 504.0], [57.7, 504.0], [57.8, 505.0], [57.9, 505.0], [58.0, 505.0], [58.1, 505.0], [58.2, 505.0], [58.3, 505.0], [58.4, 505.0], [58.5, 505.0], [58.6, 505.0], [58.7, 505.0], [58.8, 505.0], [58.9, 505.0], [59.0, 506.0], [59.1, 506.0], [59.2, 507.0], [59.3, 507.0], [59.4, 507.0], [59.5, 507.0], [59.6, 507.0], [59.7, 507.0], [59.8, 507.0], [59.9, 507.0], [60.0, 507.0], [60.1, 507.0], [60.2, 508.0], [60.3, 508.0], [60.4, 508.0], [60.5, 509.0], [60.6, 509.0], [60.7, 509.0], [60.8, 509.0], [60.9, 509.0], [61.0, 509.0], [61.1, 511.0], [61.2, 511.0], [61.3, 511.0], [61.4, 511.0], [61.5, 511.0], [61.6, 511.0], [61.7, 513.0], [61.8, 513.0], [61.9, 514.0], [62.0, 514.0], [62.1, 515.0], [62.2, 515.0], [62.3, 515.0], [62.4, 515.0], [62.5, 516.0], [62.6, 516.0], [62.7, 517.0], [62.8, 517.0], [62.9, 517.0], [63.0, 517.0], [63.1, 517.0], [63.2, 517.0], [63.3, 517.0], [63.4, 517.0], [63.5, 517.0], [63.6, 517.0], [63.7, 518.0], [63.8, 518.0], [63.9, 518.0], [64.0, 518.0], [64.1, 519.0], [64.2, 519.0], [64.3, 519.0], [64.4, 519.0], [64.5, 519.0], [64.6, 519.0], [64.7, 519.0], [64.8, 519.0], [64.9, 519.0], [65.0, 519.0], [65.1, 520.0], [65.2, 520.0], [65.3, 521.0], [65.4, 521.0], [65.5, 521.0], [65.6, 521.0], [65.7, 521.0], [65.8, 521.0], [65.9, 521.0], [66.0, 521.0], [66.1, 521.0], [66.2, 521.0], [66.3, 521.0], [66.4, 521.0], [66.5, 522.0], [66.6, 522.0], [66.7, 522.0], [66.8, 522.0], [66.9, 522.0], [67.0, 522.0], [67.1, 522.0], [67.2, 522.0], [67.3, 522.0], [67.4, 522.0], [67.5, 522.0], [67.6, 522.0], [67.7, 523.0], [67.8, 523.0], [67.9, 524.0], [68.0, 524.0], [68.1, 530.0], [68.2, 530.0], [68.3, 532.0], [68.4, 532.0], [68.5, 533.0], [68.6, 533.0], [68.7, 534.0], [68.8, 534.0], [68.9, 534.0], [69.0, 534.0], [69.1, 535.0], [69.2, 535.0], [69.3, 536.0], [69.4, 536.0], [69.5, 536.0], [69.6, 536.0], [69.7, 537.0], [69.8, 537.0], [69.9, 537.0], [70.0, 537.0], [70.1, 537.0], [70.2, 537.0], [70.3, 538.0], [70.4, 538.0], [70.5, 538.0], [70.6, 538.0], [70.7, 539.0], [70.8, 539.0], [70.9, 540.0], [71.0, 540.0], [71.1, 540.0], [71.2, 540.0], [71.3, 541.0], [71.4, 541.0], [71.5, 541.0], [71.6, 541.0], [71.7, 541.0], [71.8, 541.0], [71.9, 541.0], [72.0, 541.0], [72.1, 541.0], [72.2, 541.0], [72.3, 542.0], [72.4, 542.0], [72.5, 550.0], [72.6, 550.0], [72.7, 552.0], [72.8, 552.0], [72.9, 554.0], [73.0, 554.0], [73.1, 554.0], [73.2, 554.0], [73.3, 563.0], [73.4, 563.0], [73.5, 569.0], [73.6, 569.0], [73.7, 570.0], [73.8, 570.0], [73.9, 571.0], [74.0, 571.0], [74.1, 571.0], [74.2, 571.0], [74.3, 571.0], [74.4, 571.0], [74.5, 573.0], [74.6, 573.0], [74.7, 574.0], [74.8, 574.0], [74.9, 575.0], [75.0, 575.0], [75.1, 575.0], [75.2, 575.0], [75.3, 575.0], [75.4, 575.0], [75.5, 575.0], [75.6, 575.0], [75.7, 576.0], [75.8, 576.0], [75.9, 577.0], [76.0, 577.0], [76.1, 578.0], [76.2, 578.0], [76.3, 581.0], [76.4, 581.0], [76.5, 587.0], [76.6, 587.0], [76.7, 587.0], [76.8, 587.0], [76.9, 588.0], [77.0, 588.0], [77.1, 589.0], [77.2, 589.0], [77.3, 590.0], [77.4, 590.0], [77.5, 590.0], [77.6, 590.0], [77.7, 591.0], [77.8, 591.0], [77.9, 591.0], [78.0, 591.0], [78.1, 594.0], [78.2, 594.0], [78.3, 595.0], [78.4, 595.0], [78.5, 596.0], [78.6, 596.0], [78.7, 598.0], [78.8, 598.0], [78.9, 606.0], [79.0, 606.0], [79.1, 609.0], [79.2, 609.0], [79.3, 612.0], [79.4, 612.0], [79.5, 612.0], [79.6, 612.0], [79.7, 614.0], [79.8, 614.0], [79.9, 630.0], [80.0, 630.0], [80.1, 1374.0], [80.2, 1374.0], [80.3, 1396.0], [80.4, 1396.0], [80.5, 1396.0], [80.6, 1396.0], [80.7, 1429.0], [80.8, 1429.0], [80.9, 1436.0], [81.0, 1436.0], [81.1, 1488.0], [81.2, 1488.0], [81.3, 1519.0], [81.4, 1519.0], [81.5, 1521.0], [81.6, 1521.0], [81.7, 1533.0], [81.8, 1533.0], [81.9, 1547.0], [82.0, 1547.0], [82.1, 1580.0], [82.2, 1580.0], [82.3, 1584.0], [82.4, 1584.0], [82.5, 1590.0], [82.6, 1590.0], [82.7, 1597.0], [82.8, 1597.0], [82.9, 1600.0], [83.0, 1600.0], [83.1, 1607.0], [83.2, 1607.0], [83.3, 1616.0], [83.4, 1616.0], [83.5, 1617.0], [83.6, 1617.0], [83.7, 1626.0], [83.8, 1626.0], [83.9, 1637.0], [84.0, 1637.0], [84.1, 1656.0], [84.2, 1656.0], [84.3, 1663.0], [84.4, 1663.0], [84.5, 1672.0], [84.6, 1672.0], [84.7, 1672.0], [84.8, 1672.0], [84.9, 1689.0], [85.0, 1689.0], [85.1, 1693.0], [85.2, 1693.0], [85.3, 1696.0], [85.4, 1696.0], [85.5, 1702.0], [85.6, 1702.0], [85.7, 1704.0], [85.8, 1704.0], [85.9, 1708.0], [86.0, 1708.0], [86.1, 1709.0], [86.2, 1709.0], [86.3, 1712.0], [86.4, 1712.0], [86.5, 1714.0], [86.6, 1714.0], [86.7, 1727.0], [86.8, 1727.0], [86.9, 1732.0], [87.0, 1732.0], [87.1, 1750.0], [87.2, 1750.0], [87.3, 1767.0], [87.4, 1767.0], [87.5, 1783.0], [87.6, 1783.0], [87.7, 1792.0], [87.8, 1792.0], [87.9, 1816.0], [88.0, 1816.0], [88.1, 1828.0], [88.2, 1828.0], [88.3, 1848.0], [88.4, 1848.0], [88.5, 1858.0], [88.6, 1858.0], [88.7, 1861.0], [88.8, 1861.0], [88.9, 1862.0], [89.0, 1862.0], [89.1, 1866.0], [89.2, 1866.0], [89.3, 1867.0], [89.4, 1867.0], [89.5, 1876.0], [89.6, 1876.0], [89.7, 1881.0], [89.8, 1881.0], [89.9, 1893.0], [90.0, 1893.0], [90.1, 1896.0], [90.2, 1896.0], [90.3, 1903.0], [90.4, 1903.0], [90.5, 1931.0], [90.6, 1931.0], [90.7, 1932.0], [90.8, 1932.0], [90.9, 1939.0], [91.0, 1939.0], [91.1, 1966.0], [91.2, 1966.0], [91.3, 1970.0], [91.4, 1970.0], [91.5, 1970.0], [91.6, 1970.0], [91.7, 1977.0], [91.8, 1977.0], [91.9, 1981.0], [92.0, 1981.0], [92.1, 2004.0], [92.2, 2004.0], [92.3, 2008.0], [92.4, 2008.0], [92.5, 2011.0], [92.6, 2011.0], [92.7, 2018.0], [92.8, 2018.0], [92.9, 2021.0], [93.0, 2021.0], [93.1, 2022.0], [93.2, 2022.0], [93.3, 2023.0], [93.4, 2023.0], [93.5, 2023.0], [93.6, 2023.0], [93.7, 2025.0], [93.8, 2025.0], [93.9, 2029.0], [94.0, 2029.0], [94.1, 2032.0], [94.2, 2032.0], [94.3, 2032.0], [94.4, 2032.0], [94.5, 2065.0], [94.6, 2065.0], [94.7, 2102.0], [94.8, 2102.0], [94.9, 2103.0], [95.0, 2103.0], [95.1, 2112.0], [95.2, 2112.0], [95.3, 2113.0], [95.4, 2113.0], [95.5, 2118.0], [95.6, 2118.0], [95.7, 2121.0], [95.8, 2121.0], [95.9, 2123.0], [96.0, 2123.0], [96.1, 2134.0], [96.2, 2134.0], [96.3, 2140.0], [96.4, 2140.0], [96.5, 2162.0], [96.6, 2162.0], [96.7, 2163.0], [96.8, 2163.0], [96.9, 2165.0], [97.0, 2165.0], [97.1, 2166.0], [97.2, 2166.0], [97.3, 2168.0], [97.4, 2168.0], [97.5, 2168.0], [97.6, 2168.0], [97.7, 2169.0], [97.8, 2169.0], [97.9, 2169.0], [98.0, 2169.0], [98.1, 2170.0], [98.2, 2170.0], [98.3, 2183.0], [98.4, 2183.0], [98.5, 2186.0], [98.6, 2186.0], [98.7, 2187.0], [98.8, 2187.0], [98.9, 2187.0], [99.0, 2187.0], [99.1, 2202.0], [99.2, 2202.0], [99.3, 2215.0], [99.4, 2215.0], [99.5, 2220.0], [99.6, 2220.0], [99.7, 2220.0], [99.8, 2220.0], [99.9, 2221.0], [100.0, 2221.0]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 300.0, "maxY": 212.0, "series": [{"data": [[2100.0, 22.0], [2200.0, 5.0], [600.0, 6.0], [300.0, 54.0], [1300.0, 3.0], [1400.0, 3.0], [1500.0, 8.0], [1600.0, 13.0], [400.0, 212.0], [1700.0, 12.0], [1800.0, 12.0], [1900.0, 9.0], [2000.0, 13.0], [500.0, 128.0]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 94.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 268.0, "series": [{"data": [[0.0, 268.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 138.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 94.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 90.262, "minX": 1.75082862E12, "maxY": 90.262, "series": [{"data": [[1.75082862E12, 90.262]], "isOverall": false, "label": "Spike Test Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75082862E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 364.0, "minX": 1.0, "maxY": 823.9717223650381, "series": [{"data": [[2.0, 380.0], [3.0, 370.0], [7.0, 387.25], [8.0, 387.0], [9.0, 383.0], [10.0, 364.0], [12.0, 453.5], [14.0, 452.0], [15.0, 428.0], [18.0, 438.3333333333333], [23.0, 435.5], [24.0, 448.0], [26.0, 446.0], [27.0, 466.0], [30.0, 452.0], [33.0, 427.0], [36.0, 435.6666666666667], [39.0, 510.0], [49.0, 482.0], [50.0, 498.5], [53.0, 457.0], [52.0, 510.75], [56.0, 539.3333333333334], [59.0, 630.0], [58.0, 587.0], [61.0, 459.0], [60.0, 488.5], [63.0, 459.5], [66.0, 507.0], [65.0, 511.0], [64.0, 571.0], [70.0, 503.5], [75.0, 557.5], [73.0, 541.0], [79.0, 596.0], [77.0, 514.0], [76.0, 520.0], [83.0, 609.0], [81.0, 609.0], [80.0, 601.5], [91.0, 570.5], [89.0, 599.5], [88.0, 542.6666666666666], [95.0, 574.75], [94.0, 577.0], [93.0, 575.0], [92.0, 571.0], [99.0, 553.6], [97.0, 566.0], [96.0, 554.0], [100.0, 823.9717223650381], [1.0, 382.0]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}, {"data": [[90.262, 752.8219999999995]], "isOverall": false, "label": "POST CoverPhoto-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2286.633333333333, "minX": 1.75082862E12, "maxY": 2303.3, "series": [{"data": [[1.75082862E12, 2303.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75082862E12, 2286.633333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75082862E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 752.8219999999995, "minX": 1.75082862E12, "maxY": 752.8219999999995, "series": [{"data": [[1.75082862E12, 752.8219999999995]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75082862E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 750.1499999999996, "minX": 1.75082862E12, "maxY": 750.1499999999996, "series": [{"data": [[1.75082862E12, 750.1499999999996]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75082862E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 492.6340000000001, "minX": 1.75082862E12, "maxY": 492.6340000000001, "series": [{"data": [[1.75082862E12, 492.6340000000001]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75082862E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 357.0, "minX": 1.75082862E12, "maxY": 2221.0, "series": [{"data": [[1.75082862E12, 2221.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75082862E12, 357.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75082862E12, 1895.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75082862E12, 2201.8500000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75082862E12, 487.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75082862E12, 2111.5499999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75082862E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 461.5, "minX": 119.0, "maxY": 1488.0, "series": [{"data": [[189.0, 1488.0], [192.0, 461.5], [119.0, 517.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 192.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 458.0, "minX": 119.0, "maxY": 1478.0, "series": [{"data": [[189.0, 1478.0], [192.0, 458.0], [119.0, 516.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 192.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75082862E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75082862E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75082862E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75082862E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75082862E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75082862E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75082862E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75082862E12, 8.333333333333334]], "isOverall": false, "label": "POST CoverPhoto-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75082862E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75082862E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75082862E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75082862E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

