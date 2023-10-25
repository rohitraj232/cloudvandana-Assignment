public class isPangram {

    public static void main(String[] args) {
        String sentence = "abcdefghijklmnopqrstuvwxyz";
        if(checkIfPangram(sentence)) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }

    public static boolean checkIfPangram(String sentence) {
        int[] freq = new int[26];
        for (int i = 0; i < 26; i++) {
            freq[i] = 0;
        }
        for (int i = 0; i < sentence.length(); i++) {
            if (sentence.charAt(i) != ' ') {
                freq[sentence.charAt(i) - 'a']++;
            }
        }
        int temp = 0;
        for (int i = 0; i < 26; i++) {
            if (freq[i] == 0) {
                temp = 1;
                break;
            }
        }
        if (temp == 1) {
            return false;
        }
        return true;
    }
}
