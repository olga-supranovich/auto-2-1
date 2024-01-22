let userData = {
  balance: 500,
};

let parcelData = {
  id: "1432HGF",
  cost: 100,
  code: "A001DFX0",
  isDelivered: false,
};

let expectedData = {
  code: "A001DFX0",
};

let postamat = [null, null, null, "1432HGF", null];

function getParcel() {
  if (parcelData.code === expectedData.code) {
    userData.balance -= parcelData.cost;
    parcelData.isDelivered = true;
    console.log(
      `Заберите посылку ${parcelData.id} из ячейки №${
        postamat.indexOf(parcelData.id) + 1
      }. Ваш счет составляет: ${userData.balance}ед.`
    );
  } else {
    console.log(`Код получения неверный`);
  }
}

getParcel();
