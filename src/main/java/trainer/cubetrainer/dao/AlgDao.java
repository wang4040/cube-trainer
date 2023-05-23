package trainer.cubetrainer.dao;

import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import trainer.cubetrainer.entity.Alg;
import trainer.cubetrainer.domain.AlgListResponse;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class AlgDao extends AbstractHibernateDao<Alg>{

    public AlgDao() { setClazz(Alg.class);}


    public List<Alg> getAllAlgs() {
        List<Alg> lst = this.getAll();
        return lst.stream()
                .map(a -> (Alg)a)
                .collect(Collectors.toList());
    }
    public List<Alg> getAllOll() {
        CriteriaBuilder cb = getCurrentSession().getCriteriaBuilder();
        CriteriaQuery<Alg> cr = cb.createQuery(Alg.class);
        Root<Alg> root = cr.from(Alg.class);
        cr.select(root);
        cr.where(cb.equal(root.get("category"), "oll"));

        return getAlgsListHelper(cr);
    }

    public List<Alg> getAllPll() {
        CriteriaBuilder cb = getCurrentSession().getCriteriaBuilder();
        CriteriaQuery<Alg> cr = cb.createQuery(Alg.class);
        Root<Alg> root = cr.from(Alg.class);
        cr.select(root);
        cr.where(cb.equal(root.get("category"), "pll"));

        return getAlgsListHelper(cr);
    }

    public Alg addAlg(String category, String name, String content) {
        Alg alg = new Alg();
        alg.setCategory(category);
        alg.setName(name);
        alg.setContent(content);
        add(alg);
        return alg;
    }




    private List<Alg> getAlgsListHelper(CriteriaQuery<Alg> cr) {
        Query<Alg> query = getCurrentSession().createQuery(cr);
        List<Alg> temp = query.getResultList();
        return temp.stream()
                .map(a -> (Alg)a)
                .collect(Collectors.toList());
    }

}
