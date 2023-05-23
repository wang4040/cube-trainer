package trainer.cubetrainer.domain;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AlgRequest {
    String category;
    String name;
    int length;
    String content;
}
