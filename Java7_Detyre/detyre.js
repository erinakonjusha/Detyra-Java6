     document.getElementById("paragrafi1").textContent = "Përshendetje, studentë!";

        document.getElementById("butoni1").style.backgroundColor = "red";

        document.getElementById("kuti").style.border = "3px solid blue";

        document.querySelector("h2").textContent = "Titulli i ndryshuar me JavaScript";

        let paragrafet = document.querySelectorAll(".greenPara");
        paragrafet.forEach(p => p.style.color = "green");

        let count = document.querySelectorAll(".countPara").length;
        document.getElementById("rezultati").textContent =
            "Numri total i paragrafëve është: " + count;

        let items = document.querySelectorAll(".item");
        let ngjyrat = ["red", "green", "blue"];

        items.forEach((el, index) => {
            el.style.color = ngjyrat[index];
        });