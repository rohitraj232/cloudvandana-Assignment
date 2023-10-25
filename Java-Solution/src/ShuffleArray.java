import java.util.Random;

public class ShuffleArray {

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffle(array);
        printArray(array);
    }

    private static void shuffle(int[] array) {
        for (int i = 0; i < array.length; i++) {
            int j = new Random().nextInt(array.length);
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    private static void printArray(int[] array) {
        System.out.print("Shuffled array: ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }
}