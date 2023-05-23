package trainer.cubetrainer.domain;

import lombok.*;
import trainer.cubetrainer.entity.Alg;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AlgListResponse {
    int length;
    List<Alg> algList;
}
