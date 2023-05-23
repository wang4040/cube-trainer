package trainer.cubetrainer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import trainer.cubetrainer.domain.AlgRequest;
import trainer.cubetrainer.service.AlgService;
import trainer.cubetrainer.entity.Alg;
import trainer.cubetrainer.domain.AlgListResponse;

import java.util.List;

@RestController
public class AlgController {

    private AlgService algService;

    @Autowired
    public void setAlgService(AlgService algService) {
        this.algService = algService;
    }

    @GetMapping("/all")
    public List<Alg> getAll() {
        List<Alg> algs = algService.getAll();
        return algs;
    }

    @GetMapping("/oll")
    public List<Alg> getOll() {
        List<Alg> algs = algService.getAllOll();
        //return new AlgListResponse(algs.size(), algs);
        return algs;
    }

    @GetMapping("/pll")
    public List<Alg> getPll() {
        List<Alg> algs = algService.getAllPll();
        //return new AlgListResponse(algs.size(), algs);
        return algs;
    }

    @PostMapping("/add")
    public Alg addAlg(@RequestBody AlgRequest algRequest) {
        Alg alg = algService.addAlg(algRequest.getCategory(), algRequest.getName(), algRequest.getContent());
        return alg;
    }

}
