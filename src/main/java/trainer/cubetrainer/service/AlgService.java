package trainer.cubetrainer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trainer.cubetrainer.dao.AlgDao;
import trainer.cubetrainer.entity.Alg;

import java.util.List;

@Service
public class AlgService {
    private AlgDao algDao;

    @Autowired
    public void setAlgService(AlgDao algDao) {
        this.algDao = algDao;
    }

    public List<Alg> getAll() {
        return algDao.getAllAlgs();
    }
    public List<Alg> getAllOll() {
        return algDao.getAllOll();
    }
    public List<Alg> getAllPll() {
        return algDao.getAllPll();
    }
    public Alg addAlg(String category, String name, String content) {
        return algDao.addAlg(category, name, content);
    }
}
