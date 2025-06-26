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
        data: {"result": {"minY": 490.0, "minX": 0.0, "maxY": 75584.0, "series": [{"data": [[0.0, 490.0], [0.1, 496.0], [0.2, 502.0], [0.3, 502.0], [0.4, 505.0], [0.5, 506.0], [0.6, 509.0], [0.7, 509.0], [0.8, 511.0], [0.9, 512.0], [1.0, 512.0], [1.1, 513.0], [1.2, 513.0], [1.3, 515.0], [1.4, 515.0], [1.5, 517.0], [1.6, 518.0], [1.7, 518.0], [1.8, 520.0], [1.9, 520.0], [2.0, 520.0], [2.1, 521.0], [2.2, 521.0], [2.3, 521.0], [2.4, 522.0], [2.5, 523.0], [2.6, 524.0], [2.7, 524.0], [2.8, 524.0], [2.9, 525.0], [3.0, 525.0], [3.1, 525.0], [3.2, 525.0], [3.3, 525.0], [3.4, 526.0], [3.5, 526.0], [3.6, 526.0], [3.7, 527.0], [3.8, 527.0], [3.9, 527.0], [4.0, 527.0], [4.1, 527.0], [4.2, 528.0], [4.3, 528.0], [4.4, 528.0], [4.5, 528.0], [4.6, 528.0], [4.7, 530.0], [4.8, 530.0], [4.9, 530.0], [5.0, 531.0], [5.1, 531.0], [5.2, 531.0], [5.3, 531.0], [5.4, 531.0], [5.5, 532.0], [5.6, 532.0], [5.7, 532.0], [5.8, 532.0], [5.9, 533.0], [6.0, 533.0], [6.1, 533.0], [6.2, 534.0], [6.3, 534.0], [6.4, 534.0], [6.5, 534.0], [6.6, 534.0], [6.7, 535.0], [6.8, 535.0], [6.9, 536.0], [7.0, 536.0], [7.1, 536.0], [7.2, 537.0], [7.3, 537.0], [7.4, 537.0], [7.5, 538.0], [7.6, 538.0], [7.7, 539.0], [7.8, 539.0], [7.9, 539.0], [8.0, 540.0], [8.1, 540.0], [8.2, 541.0], [8.3, 542.0], [8.4, 544.0], [8.5, 544.0], [8.6, 544.0], [8.7, 545.0], [8.8, 545.0], [8.9, 545.0], [9.0, 545.0], [9.1, 546.0], [9.2, 547.0], [9.3, 547.0], [9.4, 547.0], [9.5, 548.0], [9.6, 548.0], [9.7, 549.0], [9.8, 549.0], [9.9, 549.0], [10.0, 550.0], [10.1, 551.0], [10.2, 551.0], [10.3, 552.0], [10.4, 552.0], [10.5, 552.0], [10.6, 552.0], [10.7, 552.0], [10.8, 553.0], [10.9, 553.0], [11.0, 553.0], [11.1, 554.0], [11.2, 554.0], [11.3, 554.0], [11.4, 554.0], [11.5, 554.0], [11.6, 555.0], [11.7, 555.0], [11.8, 556.0], [11.9, 556.0], [12.0, 556.0], [12.1, 556.0], [12.2, 556.0], [12.3, 556.0], [12.4, 557.0], [12.5, 557.0], [12.6, 557.0], [12.7, 558.0], [12.8, 558.0], [12.9, 558.0], [13.0, 559.0], [13.1, 560.0], [13.2, 560.0], [13.3, 560.0], [13.4, 561.0], [13.5, 561.0], [13.6, 562.0], [13.7, 562.0], [13.8, 563.0], [13.9, 563.0], [14.0, 564.0], [14.1, 564.0], [14.2, 564.0], [14.3, 565.0], [14.4, 566.0], [14.5, 566.0], [14.6, 566.0], [14.7, 567.0], [14.8, 567.0], [14.9, 567.0], [15.0, 567.0], [15.1, 568.0], [15.2, 569.0], [15.3, 569.0], [15.4, 569.0], [15.5, 570.0], [15.6, 570.0], [15.7, 570.0], [15.8, 571.0], [15.9, 572.0], [16.0, 573.0], [16.1, 573.0], [16.2, 573.0], [16.3, 574.0], [16.4, 574.0], [16.5, 575.0], [16.6, 575.0], [16.7, 576.0], [16.8, 576.0], [16.9, 577.0], [17.0, 577.0], [17.1, 577.0], [17.2, 578.0], [17.3, 578.0], [17.4, 579.0], [17.5, 580.0], [17.6, 580.0], [17.7, 582.0], [17.8, 582.0], [17.9, 582.0], [18.0, 582.0], [18.1, 583.0], [18.2, 583.0], [18.3, 584.0], [18.4, 584.0], [18.5, 586.0], [18.6, 586.0], [18.7, 587.0], [18.8, 587.0], [18.9, 587.0], [19.0, 587.0], [19.1, 587.0], [19.2, 588.0], [19.3, 588.0], [19.4, 588.0], [19.5, 588.0], [19.6, 588.0], [19.7, 589.0], [19.8, 590.0], [19.9, 590.0], [20.0, 591.0], [20.1, 591.0], [20.2, 593.0], [20.3, 593.0], [20.4, 594.0], [20.5, 594.0], [20.6, 594.0], [20.7, 596.0], [20.8, 596.0], [20.9, 596.0], [21.0, 597.0], [21.1, 597.0], [21.2, 597.0], [21.3, 598.0], [21.4, 599.0], [21.5, 599.0], [21.6, 600.0], [21.7, 601.0], [21.8, 601.0], [21.9, 601.0], [22.0, 602.0], [22.1, 602.0], [22.2, 603.0], [22.3, 603.0], [22.4, 604.0], [22.5, 604.0], [22.6, 605.0], [22.7, 605.0], [22.8, 605.0], [22.9, 606.0], [23.0, 606.0], [23.1, 606.0], [23.2, 607.0], [23.3, 607.0], [23.4, 608.0], [23.5, 608.0], [23.6, 608.0], [23.7, 608.0], [23.8, 608.0], [23.9, 609.0], [24.0, 609.0], [24.1, 609.0], [24.2, 609.0], [24.3, 610.0], [24.4, 611.0], [24.5, 611.0], [24.6, 611.0], [24.7, 612.0], [24.8, 612.0], [24.9, 613.0], [25.0, 613.0], [25.1, 613.0], [25.2, 614.0], [25.3, 614.0], [25.4, 614.0], [25.5, 614.0], [25.6, 614.0], [25.7, 614.0], [25.8, 614.0], [25.9, 614.0], [26.0, 615.0], [26.1, 615.0], [26.2, 615.0], [26.3, 615.0], [26.4, 616.0], [26.5, 616.0], [26.6, 616.0], [26.7, 617.0], [26.8, 618.0], [26.9, 618.0], [27.0, 618.0], [27.1, 618.0], [27.2, 619.0], [27.3, 620.0], [27.4, 620.0], [27.5, 620.0], [27.6, 620.0], [27.7, 620.0], [27.8, 620.0], [27.9, 620.0], [28.0, 621.0], [28.1, 621.0], [28.2, 621.0], [28.3, 623.0], [28.4, 624.0], [28.5, 624.0], [28.6, 626.0], [28.7, 626.0], [28.8, 626.0], [28.9, 626.0], [29.0, 627.0], [29.1, 627.0], [29.2, 627.0], [29.3, 627.0], [29.4, 627.0], [29.5, 628.0], [29.6, 628.0], [29.7, 628.0], [29.8, 629.0], [29.9, 629.0], [30.0, 631.0], [30.1, 632.0], [30.2, 632.0], [30.3, 632.0], [30.4, 633.0], [30.5, 633.0], [30.6, 634.0], [30.7, 634.0], [30.8, 634.0], [30.9, 634.0], [31.0, 635.0], [31.1, 635.0], [31.2, 635.0], [31.3, 636.0], [31.4, 637.0], [31.5, 637.0], [31.6, 637.0], [31.7, 639.0], [31.8, 639.0], [31.9, 639.0], [32.0, 639.0], [32.1, 639.0], [32.2, 640.0], [32.3, 640.0], [32.4, 640.0], [32.5, 640.0], [32.6, 641.0], [32.7, 641.0], [32.8, 642.0], [32.9, 642.0], [33.0, 642.0], [33.1, 643.0], [33.2, 643.0], [33.3, 643.0], [33.4, 644.0], [33.5, 644.0], [33.6, 645.0], [33.7, 645.0], [33.8, 645.0], [33.9, 646.0], [34.0, 646.0], [34.1, 647.0], [34.2, 647.0], [34.3, 647.0], [34.4, 647.0], [34.5, 648.0], [34.6, 648.0], [34.7, 648.0], [34.8, 649.0], [34.9, 649.0], [35.0, 649.0], [35.1, 649.0], [35.2, 649.0], [35.3, 650.0], [35.4, 651.0], [35.5, 651.0], [35.6, 651.0], [35.7, 652.0], [35.8, 652.0], [35.9, 652.0], [36.0, 652.0], [36.1, 652.0], [36.2, 652.0], [36.3, 653.0], [36.4, 653.0], [36.5, 653.0], [36.6, 653.0], [36.7, 653.0], [36.8, 654.0], [36.9, 654.0], [37.0, 654.0], [37.1, 654.0], [37.2, 654.0], [37.3, 654.0], [37.4, 654.0], [37.5, 654.0], [37.6, 655.0], [37.7, 656.0], [37.8, 656.0], [37.9, 656.0], [38.0, 656.0], [38.1, 657.0], [38.2, 657.0], [38.3, 657.0], [38.4, 658.0], [38.5, 658.0], [38.6, 658.0], [38.7, 659.0], [38.8, 659.0], [38.9, 660.0], [39.0, 660.0], [39.1, 661.0], [39.2, 661.0], [39.3, 661.0], [39.4, 661.0], [39.5, 661.0], [39.6, 662.0], [39.7, 662.0], [39.8, 662.0], [39.9, 662.0], [40.0, 663.0], [40.1, 663.0], [40.2, 663.0], [40.3, 663.0], [40.4, 663.0], [40.5, 664.0], [40.6, 664.0], [40.7, 665.0], [40.8, 666.0], [40.9, 666.0], [41.0, 667.0], [41.1, 667.0], [41.2, 667.0], [41.3, 667.0], [41.4, 667.0], [41.5, 667.0], [41.6, 667.0], [41.7, 667.0], [41.8, 668.0], [41.9, 668.0], [42.0, 668.0], [42.1, 668.0], [42.2, 668.0], [42.3, 668.0], [42.4, 669.0], [42.5, 669.0], [42.6, 669.0], [42.7, 669.0], [42.8, 670.0], [42.9, 671.0], [43.0, 671.0], [43.1, 672.0], [43.2, 672.0], [43.3, 672.0], [43.4, 675.0], [43.5, 676.0], [43.6, 676.0], [43.7, 677.0], [43.8, 677.0], [43.9, 678.0], [44.0, 678.0], [44.1, 678.0], [44.2, 681.0], [44.3, 681.0], [44.4, 681.0], [44.5, 681.0], [44.6, 681.0], [44.7, 681.0], [44.8, 682.0], [44.9, 682.0], [45.0, 683.0], [45.1, 683.0], [45.2, 685.0], [45.3, 685.0], [45.4, 686.0], [45.5, 687.0], [45.6, 687.0], [45.7, 687.0], [45.8, 687.0], [45.9, 687.0], [46.0, 688.0], [46.1, 688.0], [46.2, 688.0], [46.3, 688.0], [46.4, 689.0], [46.5, 690.0], [46.6, 690.0], [46.7, 690.0], [46.8, 690.0], [46.9, 690.0], [47.0, 691.0], [47.1, 691.0], [47.2, 691.0], [47.3, 692.0], [47.4, 693.0], [47.5, 693.0], [47.6, 693.0], [47.7, 694.0], [47.8, 694.0], [47.9, 695.0], [48.0, 695.0], [48.1, 697.0], [48.2, 697.0], [48.3, 698.0], [48.4, 698.0], [48.5, 699.0], [48.6, 700.0], [48.7, 700.0], [48.8, 701.0], [48.9, 702.0], [49.0, 702.0], [49.1, 702.0], [49.2, 703.0], [49.3, 703.0], [49.4, 703.0], [49.5, 703.0], [49.6, 703.0], [49.7, 704.0], [49.8, 704.0], [49.9, 704.0], [50.0, 704.0], [50.1, 704.0], [50.2, 706.0], [50.3, 706.0], [50.4, 707.0], [50.5, 707.0], [50.6, 709.0], [50.7, 709.0], [50.8, 710.0], [50.9, 710.0], [51.0, 712.0], [51.1, 713.0], [51.2, 713.0], [51.3, 714.0], [51.4, 714.0], [51.5, 714.0], [51.6, 715.0], [51.7, 715.0], [51.8, 715.0], [51.9, 716.0], [52.0, 716.0], [52.1, 716.0], [52.2, 716.0], [52.3, 717.0], [52.4, 717.0], [52.5, 718.0], [52.6, 719.0], [52.7, 719.0], [52.8, 719.0], [52.9, 721.0], [53.0, 722.0], [53.1, 722.0], [53.2, 722.0], [53.3, 723.0], [53.4, 724.0], [53.5, 725.0], [53.6, 725.0], [53.7, 725.0], [53.8, 725.0], [53.9, 726.0], [54.0, 728.0], [54.1, 729.0], [54.2, 729.0], [54.3, 731.0], [54.4, 731.0], [54.5, 731.0], [54.6, 732.0], [54.7, 732.0], [54.8, 732.0], [54.9, 733.0], [55.0, 733.0], [55.1, 733.0], [55.2, 735.0], [55.3, 735.0], [55.4, 735.0], [55.5, 735.0], [55.6, 736.0], [55.7, 736.0], [55.8, 737.0], [55.9, 738.0], [56.0, 738.0], [56.1, 739.0], [56.2, 739.0], [56.3, 741.0], [56.4, 741.0], [56.5, 741.0], [56.6, 741.0], [56.7, 742.0], [56.8, 743.0], [56.9, 743.0], [57.0, 744.0], [57.1, 744.0], [57.2, 745.0], [57.3, 745.0], [57.4, 745.0], [57.5, 745.0], [57.6, 746.0], [57.7, 746.0], [57.8, 746.0], [57.9, 747.0], [58.0, 747.0], [58.1, 748.0], [58.2, 748.0], [58.3, 748.0], [58.4, 748.0], [58.5, 750.0], [58.6, 751.0], [58.7, 752.0], [58.8, 752.0], [58.9, 752.0], [59.0, 752.0], [59.1, 753.0], [59.2, 753.0], [59.3, 753.0], [59.4, 753.0], [59.5, 754.0], [59.6, 756.0], [59.7, 756.0], [59.8, 758.0], [59.9, 758.0], [60.0, 759.0], [60.1, 760.0], [60.2, 761.0], [60.3, 762.0], [60.4, 762.0], [60.5, 763.0], [60.6, 763.0], [60.7, 763.0], [60.8, 763.0], [60.9, 764.0], [61.0, 764.0], [61.1, 764.0], [61.2, 764.0], [61.3, 764.0], [61.4, 764.0], [61.5, 765.0], [61.6, 766.0], [61.7, 766.0], [61.8, 766.0], [61.9, 767.0], [62.0, 767.0], [62.1, 767.0], [62.2, 767.0], [62.3, 768.0], [62.4, 769.0], [62.5, 769.0], [62.6, 769.0], [62.7, 769.0], [62.8, 770.0], [62.9, 771.0], [63.0, 771.0], [63.1, 771.0], [63.2, 772.0], [63.3, 772.0], [63.4, 773.0], [63.5, 773.0], [63.6, 774.0], [63.7, 775.0], [63.8, 776.0], [63.9, 776.0], [64.0, 776.0], [64.1, 776.0], [64.2, 777.0], [64.3, 777.0], [64.4, 777.0], [64.5, 778.0], [64.6, 778.0], [64.7, 778.0], [64.8, 778.0], [64.9, 778.0], [65.0, 779.0], [65.1, 779.0], [65.2, 780.0], [65.3, 780.0], [65.4, 781.0], [65.5, 781.0], [65.6, 782.0], [65.7, 782.0], [65.8, 783.0], [65.9, 783.0], [66.0, 783.0], [66.1, 785.0], [66.2, 785.0], [66.3, 785.0], [66.4, 786.0], [66.5, 786.0], [66.6, 790.0], [66.7, 791.0], [66.8, 791.0], [66.9, 791.0], [67.0, 792.0], [67.1, 793.0], [67.2, 794.0], [67.3, 795.0], [67.4, 796.0], [67.5, 796.0], [67.6, 796.0], [67.7, 796.0], [67.8, 796.0], [67.9, 796.0], [68.0, 797.0], [68.1, 797.0], [68.2, 797.0], [68.3, 798.0], [68.4, 798.0], [68.5, 798.0], [68.6, 800.0], [68.7, 803.0], [68.8, 805.0], [68.9, 805.0], [69.0, 805.0], [69.1, 805.0], [69.2, 806.0], [69.3, 806.0], [69.4, 806.0], [69.5, 806.0], [69.6, 807.0], [69.7, 807.0], [69.8, 808.0], [69.9, 808.0], [70.0, 809.0], [70.1, 810.0], [70.2, 811.0], [70.3, 811.0], [70.4, 812.0], [70.5, 812.0], [70.6, 812.0], [70.7, 812.0], [70.8, 813.0], [70.9, 813.0], [71.0, 814.0], [71.1, 814.0], [71.2, 814.0], [71.3, 814.0], [71.4, 814.0], [71.5, 815.0], [71.6, 815.0], [71.7, 815.0], [71.8, 816.0], [71.9, 816.0], [72.0, 816.0], [72.1, 816.0], [72.2, 817.0], [72.3, 817.0], [72.4, 818.0], [72.5, 818.0], [72.6, 818.0], [72.7, 819.0], [72.8, 819.0], [72.9, 819.0], [73.0, 821.0], [73.1, 824.0], [73.2, 826.0], [73.3, 827.0], [73.4, 830.0], [73.5, 831.0], [73.6, 831.0], [73.7, 831.0], [73.8, 832.0], [73.9, 832.0], [74.0, 834.0], [74.1, 838.0], [74.2, 840.0], [74.3, 842.0], [74.4, 846.0], [74.5, 848.0], [74.6, 848.0], [74.7, 849.0], [74.8, 849.0], [74.9, 851.0], [75.0, 851.0], [75.1, 855.0], [75.2, 855.0], [75.3, 857.0], [75.4, 857.0], [75.5, 860.0], [75.6, 862.0], [75.7, 862.0], [75.8, 863.0], [75.9, 866.0], [76.0, 866.0], [76.1, 866.0], [76.2, 871.0], [76.3, 871.0], [76.4, 872.0], [76.5, 877.0], [76.6, 878.0], [76.7, 879.0], [76.8, 880.0], [76.9, 880.0], [77.0, 889.0], [77.1, 889.0], [77.2, 892.0], [77.3, 893.0], [77.4, 897.0], [77.5, 903.0], [77.6, 904.0], [77.7, 908.0], [77.8, 909.0], [77.9, 909.0], [78.0, 912.0], [78.1, 913.0], [78.2, 920.0], [78.3, 922.0], [78.4, 925.0], [78.5, 925.0], [78.6, 927.0], [78.7, 928.0], [78.8, 930.0], [78.9, 944.0], [79.0, 944.0], [79.1, 946.0], [79.2, 947.0], [79.3, 950.0], [79.4, 951.0], [79.5, 952.0], [79.6, 957.0], [79.7, 960.0], [79.8, 961.0], [79.9, 963.0], [80.0, 969.0], [80.1, 971.0], [80.2, 976.0], [80.3, 978.0], [80.4, 989.0], [80.5, 1002.0], [80.6, 1012.0], [80.7, 1015.0], [80.8, 1033.0], [80.9, 1050.0], [81.0, 1051.0], [81.1, 1055.0], [81.2, 1065.0], [81.3, 1069.0], [81.4, 1074.0], [81.5, 1077.0], [81.6, 1080.0], [81.7, 1088.0], [81.8, 1092.0], [81.9, 1102.0], [82.0, 1127.0], [82.1, 1142.0], [82.2, 1150.0], [82.3, 1161.0], [82.4, 1168.0], [82.5, 1176.0], [82.6, 1189.0], [82.7, 1192.0], [82.8, 1200.0], [82.9, 1202.0], [83.0, 1216.0], [83.1, 1216.0], [83.2, 1217.0], [83.3, 1231.0], [83.4, 1232.0], [83.5, 1245.0], [83.6, 1246.0], [83.7, 1247.0], [83.8, 1247.0], [83.9, 1250.0], [84.0, 1273.0], [84.1, 1279.0], [84.2, 1283.0], [84.3, 1290.0], [84.4, 1306.0], [84.5, 1325.0], [84.6, 1332.0], [84.7, 1344.0], [84.8, 1344.0], [84.9, 1345.0], [85.0, 1349.0], [85.1, 1366.0], [85.2, 1367.0], [85.3, 1372.0], [85.4, 1372.0], [85.5, 1372.0], [85.6, 1377.0], [85.7, 1379.0], [85.8, 1381.0], [85.9, 1390.0], [86.0, 1391.0], [86.1, 1398.0], [86.2, 1399.0], [86.3, 1400.0], [86.4, 1401.0], [86.5, 1402.0], [86.6, 1410.0], [86.7, 1418.0], [86.8, 1419.0], [86.9, 1432.0], [87.0, 1435.0], [87.1, 1436.0], [87.2, 1437.0], [87.3, 1437.0], [87.4, 1439.0], [87.5, 1441.0], [87.6, 1442.0], [87.7, 1443.0], [87.8, 1445.0], [87.9, 1446.0], [88.0, 1446.0], [88.1, 1447.0], [88.2, 1450.0], [88.3, 1453.0], [88.4, 1461.0], [88.5, 1462.0], [88.6, 1482.0], [88.7, 1483.0], [88.8, 1487.0], [88.9, 1489.0], [89.0, 1489.0], [89.1, 1502.0], [89.2, 1504.0], [89.3, 1508.0], [89.4, 1512.0], [89.5, 1513.0], [89.6, 1516.0], [89.7, 1516.0], [89.8, 1521.0], [89.9, 1545.0], [90.0, 1545.0], [90.1, 1553.0], [90.2, 1559.0], [90.3, 1576.0], [90.4, 1598.0], [90.5, 1614.0], [90.6, 1617.0], [90.7, 1622.0], [90.8, 1637.0], [90.9, 1647.0], [91.0, 1651.0], [91.1, 1694.0], [91.2, 1722.0], [91.3, 1724.0], [91.4, 1735.0], [91.5, 1785.0], [91.6, 1786.0], [91.7, 1808.0], [91.8, 1843.0], [91.9, 1865.0], [92.0, 1922.0], [92.1, 1940.0], [92.2, 1944.0], [92.3, 2042.0], [92.4, 2043.0], [92.5, 2270.0], [92.6, 2442.0], [92.7, 2457.0], [92.8, 2618.0], [92.9, 2619.0], [93.0, 2627.0], [93.1, 2635.0], [93.2, 2640.0], [93.3, 2646.0], [93.4, 2688.0], [93.5, 2700.0], [93.6, 2746.0], [93.7, 2815.0], [93.8, 2884.0], [93.9, 2905.0], [94.0, 2910.0], [94.1, 2917.0], [94.2, 2957.0], [94.3, 2986.0], [94.4, 2999.0], [94.5, 3003.0], [94.6, 3025.0], [94.7, 3039.0], [94.8, 3064.0], [94.9, 3070.0], [95.0, 3092.0], [95.1, 3095.0], [95.2, 3106.0], [95.3, 3108.0], [95.4, 3113.0], [95.5, 3119.0], [95.6, 3141.0], [95.7, 3143.0], [95.8, 3159.0], [95.9, 3164.0], [96.0, 3198.0], [96.1, 3202.0], [96.2, 3256.0], [96.3, 3298.0], [96.4, 3353.0], [96.5, 3400.0], [96.6, 3408.0], [96.7, 3409.0], [96.8, 3416.0], [96.9, 3419.0], [97.0, 3454.0], [97.1, 3478.0], [97.2, 3502.0], [97.3, 3572.0], [97.4, 3619.0], [97.5, 3645.0], [97.6, 3790.0], [97.7, 3804.0], [97.8, 3839.0], [97.9, 4037.0], [98.0, 4152.0], [98.1, 4278.0], [98.2, 4381.0], [98.3, 4390.0], [98.4, 4460.0], [98.5, 4463.0], [98.6, 4480.0], [98.7, 4542.0], [98.8, 4542.0], [98.9, 4545.0], [99.0, 4550.0], [99.1, 4628.0], [99.2, 4692.0], [99.3, 5114.0], [99.4, 5277.0], [99.5, 5310.0], [99.6, 5748.0], [99.7, 5864.0], [99.8, 75426.0], [99.9, 75584.0]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 269.0, "series": [{"data": [[600.0, 269.0], [700.0, 200.0], [800.0, 90.0], [900.0, 30.0], [1000.0, 14.0], [1100.0, 9.0], [1200.0, 16.0], [1300.0, 19.0], [1400.0, 28.0], [1500.0, 14.0], [1600.0, 7.0], [1700.0, 5.0], [1800.0, 3.0], [1900.0, 3.0], [2000.0, 2.0], [2200.0, 1.0], [2400.0, 2.0], [2600.0, 7.0], [2700.0, 2.0], [2800.0, 2.0], [2900.0, 6.0], [3000.0, 7.0], [3100.0, 9.0], [3200.0, 3.0], [3300.0, 1.0], [3400.0, 7.0], [3500.0, 2.0], [3700.0, 1.0], [3600.0, 2.0], [3800.0, 2.0], [4000.0, 1.0], [4300.0, 2.0], [4200.0, 1.0], [4100.0, 1.0], [4500.0, 4.0], [4400.0, 3.0], [4600.0, 2.0], [75500.0, 1.0], [75400.0, 1.0], [5100.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [400.0, 2.0], [500.0, 214.0]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 75500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 889.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 889.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 107.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.6956521739130435, "minX": 1.75089354E12, "maxY": 32.479004665629844, "series": [{"data": [[1.75089354E12, 20.610778443113766], [1.75089366E12, 1.6956521739130435], [1.7508936E12, 32.479004665629844]], "isOverall": false, "label": "Stress Test Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75089366E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 507.5714285714286, "minX": 1.0, "maxY": 9926.999999999998, "series": [{"data": [[33.0, 882.8000000000002], [32.0, 816.5], [2.0, 9926.999999999998], [35.0, 1453.8372093023254], [34.0, 856.7600000000001], [36.0, 2358.6], [37.0, 978.6499999999999], [38.0, 762.6111111111113], [39.0, 684.1600000000001], [3.0, 615.0], [4.0, 817.5], [5.0, 952.6666666666666], [6.0, 620.1176470588234], [7.0, 543.3333333333333], [8.0, 693.0000000000001], [9.0, 531.0], [10.0, 624.4], [11.0, 578.5384615384615], [12.0, 579.4117647058823], [13.0, 577.8823529411764], [14.0, 623.1333333333333], [15.0, 653.625], [16.0, 593.3571428571428], [1.0, 507.5714285714286], [17.0, 625.0], [18.0, 562.9444444444443], [19.0, 613.0869565217391], [20.0, 913.2352941176471], [21.0, 1009.5714285714286], [22.0, 1244.705882352941], [23.0, 939.4761904761905], [24.0, 1014.1818181818181], [25.0, 1183.5833333333335], [26.0, 1395.0], [27.0, 1026.761904761905], [28.0, 1711.1818181818187], [29.0, 2666.9411764705883], [30.0, 1126.5000000000002], [31.0, 1322.85]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}, {"data": [[27.80700000000003, 1122.5840000000003]], "isOverall": false, "label": "POST CoverPhoto-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 39.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 96.01666666666667, "minX": 1.75089354E12, "maxY": 2962.0833333333335, "series": [{"data": [[1.75089354E12, 1538.6], [1.75089366E12, 202.08333333333334], [1.7508936E12, 2962.0833333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75089354E12, 1527.4666666666667], [1.75089366E12, 96.01666666666667], [1.7508936E12, 2940.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75089366E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 761.0435458786935, "minX": 1.75089354E12, "maxY": 7060.217391304345, "series": [{"data": [[1.75089354E12, 1409.724550898204], [1.75089366E12, 7060.217391304345], [1.7508936E12, 761.0435458786935]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75089366E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 492.86956521739137, "minX": 1.75089354E12, "maxY": 1407.778443113772, "series": [{"data": [[1.75089354E12, 1407.778443113772], [1.75089366E12, 492.86956521739137], [1.7508936E12, 760.1897356143083]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75089366E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 497.33592534992215, "minX": 1.75089354E12, "maxY": 6893.260869565219, "series": [{"data": [[1.75089354E12, 823.2904191616764], [1.75089366E12, 6893.260869565219], [1.7508936E12, 497.33592534992215]], "isOverall": false, "label": "POST CoverPhoto", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75089366E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 490.0, "minX": 1.75089354E12, "maxY": 5864.0, "series": [{"data": [[1.75089354E12, 5864.0], [1.75089366E12, 920.0], [1.7508936E12, 5114.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75089354E12, 502.0], [1.75089366E12, 490.0], [1.7508936E12, 515.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75089354E12, 3325.5], [1.75089366E12, 590.6], [1.7508936E12, 910.8000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75089354E12, 5298.449999999999], [1.75089366E12, 920.0], [1.7508936E12, 1723.12]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75089354E12, 777.0], [1.75089366E12, 520.0], [1.7508936E12, 706.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75089354E12, 4183.5], [1.75089366E12, 888.0999999999996], [1.7508936E12, 1213.9999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75089366E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 525.0, "minX": 1.0, "maxY": 75584.0, "series": [{"data": [[2.0, 525.0], [36.0, 689.5], [37.0, 771.0], [39.0, 1200.0], [40.0, 745.5], [41.0, 702.0], [46.0, 774.5], [48.0, 774.0], [3.0, 615.0], [52.0, 649.0], [56.0, 701.5], [63.0, 670.0], [4.0, 531.5], [6.0, 561.0], [7.0, 603.0], [11.0, 1436.0], [12.0, 2270.0], [13.0, 3256.0], [14.0, 539.5], [1.0, 920.0], [16.0, 706.0], [17.0, 535.0], [18.0, 547.0], [20.0, 665.0], [21.0, 1559.0], [22.0, 1246.5], [23.0, 1041.5], [24.0, 4461.5], [25.0, 654.0], [26.0, 551.5], [27.0, 574.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 75584.0], [2.0, 75426.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4461.0, "series": [{"data": [[2.0, 524.0], [36.0, 689.0], [37.0, 771.0], [39.0, 1199.0], [40.0, 743.5], [41.0, 702.0], [46.0, 774.5], [48.0, 774.0], [3.0, 615.0], [52.0, 649.0], [56.0, 700.5], [63.0, 670.0], [4.0, 526.5], [6.0, 559.5], [7.0, 603.0], [11.0, 1435.0], [12.0, 2269.5], [13.0, 3255.0], [14.0, 535.0], [1.0, 916.0], [16.0, 705.5], [17.0, 534.0], [18.0, 543.5], [20.0, 663.5], [21.0, 1559.0], [22.0, 1245.5], [23.0, 1041.0], [24.0, 4461.0], [25.0, 653.0], [26.0, 550.5], [27.0, 573.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0], [2.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.75089354E12, "maxY": 10.15, "series": [{"data": [[1.75089354E12, 6.166666666666667], [1.75089366E12, 0.35], [1.7508936E12, 10.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75089366E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.75089354E12, "maxY": 10.716666666666667, "series": [{"data": [[1.75089354E12, 5.566666666666666], [1.75089366E12, 0.35], [1.7508936E12, 10.716666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.75089366E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLHandshakeException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75089366E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.75089354E12, "maxY": 10.716666666666667, "series": [{"data": [[1.75089354E12, 5.566666666666666], [1.75089366E12, 0.35], [1.7508936E12, 10.716666666666667]], "isOverall": false, "label": "POST CoverPhoto-success", "isController": false}, {"data": [[1.75089366E12, 0.03333333333333333]], "isOverall": false, "label": "POST CoverPhoto-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75089366E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.75089354E12, "maxY": 10.716666666666667, "series": [{"data": [[1.75089354E12, 5.566666666666666], [1.75089366E12, 0.35], [1.7508936E12, 10.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75089366E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75089366E12, "title": "Total Transactions Per Second"}},
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

