package trainer.cubetrainer.entity;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Set;

@Entity
@Table(name="algs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Alg {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;
    @Column(name = "category")
    private String category;
    @Column(name = "name")
    private String name;
    @Column(name = "content")
    private String content;

}
