int Availablestock[]=new int[Ptime];
		int projectproduce=new int[Ptime];
		int projectinput[]=new int[Ptime];
		int sale[]=new int[Ptime];

int Grossdemand = new int[Ptime];
int starttime;
for (starttime = 1; starttime <= needtime; starttime++) {
    Grossdemand[starttime] = ordervolume[starttime];
}
for (; starttime <= Projecttime; starttime++) {
    Grossdemand[starttime] = max(predictionNum[starttime], ordervolume[starttime]);
}
for (; starttime < Ptime; starttime++) {
    Grossdemand[starttime] = predictionNum[starttime];
}

int[] realneed = new int[Ptime];
for (int i = 1; i < Ptime; i++) {
    realneed[i] = Grossdemand[i] - Availablestock[i - 1] - passreceive[i] + safeNumber;
    if (realneed[i] < 10) {
        projectproduce[i] = 10;
    }
    else {
        projectproduce[i] = (realneed[i] - realneed[i] % 10) + 10;
    }
    Availablestock[i] = Availablestock[i - 1] + passreceive[i] - Grossdemand[i] + projectproduce[i];
    if (i == 1) {
        sale[i] = projectproduce[i] + passreceive[i] - Grossdemand[i] + Availablestock[0];
    }
    else {
        sale[i] = projectproduce[i] + passreceive[i] - Grossdemand[i];
    }
}
for(int i=1;i<Ptime-1;i++) {
    projectinput[i]=projectproduce[i+1];
}
