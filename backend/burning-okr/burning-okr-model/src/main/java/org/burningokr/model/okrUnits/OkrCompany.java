package org.burningokr.model.okrUnits;

import java.util.ArrayList;
import java.util.Collection;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.burningokr.model.cycles.Cycle;
import org.burningokr.model.cycles.OkrUnitHistory;
import org.burningokr.model.okrUnits.okrUnitHistories.OkrCompanyHistory;

@Entity
@Table(name = "okr_company")
@Data
@EqualsAndHashCode(callSuper = true)
public class OkrCompany extends OkrUnit implements OkrParentUnit {

  @ToString.Exclude @ManyToOne @EqualsAndHashCode.Exclude private Cycle cycle;

  @OneToMany(
      mappedBy = "parentOkrUnit",
      cascade = CascadeType.REMOVE,
      targetEntity = OkrChildUnit.class)
  @EqualsAndHashCode.Exclude
  private Collection<OkrChildUnit> okrChildUnits = new ArrayList<>();

  public boolean hasDepartments() {
    return !okrChildUnits.isEmpty();
  }

  @Override
  public Collection<OkrChildUnit> getOkrChildUnits() {
    return okrChildUnits;
  }

  @Override
  public void setOkrChildUnits(Collection<OkrChildUnit> subDepartments) {
    this.okrChildUnits = subDepartments;
  }

  @ManyToOne
  private OkrCompanyHistory history;

  /**
   * Creates a copy of the OkrCompany without relations.
   *
   * <p>The values that are copied are:
   *
   * <ul>
   *   <li>Name
   *   <li>Label
   *   <li>History
   * </ul>
   *
   * @return a copy of the OkrCompany without relations
   */
  public OkrCompany getCopyWithoutRelations() {
    OkrCompany copy = new OkrCompany();
    copy.setHistory(this.getHistory());
    copy.setName(this.getName());
    copy.setLabel(this.getLabel());
    return copy;
  }
}
